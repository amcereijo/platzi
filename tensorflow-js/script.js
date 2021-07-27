let stopTraining = false;
let modelo;

async function getData() {
  const datosCasasR = await fetch('datos.json');
  const datosCasas = await datosCasasR.json();

  const datosLimpios = datosCasas
    .map((casa) => ({
      precio: casa.Precio,
      cuartos: casa.NumeroDeCuartosPromedio
    }))
    .filter((casa) => casa.precio && casa.cuartos);

  return datosLimpios;
}

function visualizarDatos(data) {
  const valores = data.map(({cuartos: x, precio: y}) => ({ x,y }));

  tfvis.render.scatterplot(
    { name: 'Cuartos vs Precio' },
    { values: valores },
    {
      xLabel: 'Cuartos',
      yLabel: 'Precio',
      height: 300
    }
  );
}

function crearModelo() {
  const modelo = tf.sequential();

  modelo.add(tf.layers.dense({
    inputShape: [1],
    units: 1,
    useBias: true
  }));

  modelo.add(tf.layers.dense({
    units:1,
    useBias: true
  }));

  return modelo;
}

const optimizador = tf.train.adam();
const functionPerdida = tf.losses.meanSquaredError;
const metricas = ['mse']; // min square error

async function entrenarModelo(model, inputs, labels) {
  model.compile({
    optimizer: optimizador,
    loss: functionPerdida,
    metrics: metricas
  });

  const surface = {
    name: 'show.history live',
    tab: 'Training'
  };
  const tamanioBatch = 28;
  const epochs = 50; // vuelta totales al modelo
  const history = []; // maentiene metricas durante entrenamiento

  return model.fit(inputs, labels,  {
    tamanioBatch,
    epochs,
    shuffle: true,
    //el callback se ejecuta cada vez que termina un entrenamiento correcto
    callbacks: {
      onEpochEnd: (epoch, log) => {
        console.log(log);
        console.log('stopTraining', stopTraining);
        history.push(log);

        tfvis.show.history(
          surface,
          history,
          ['loss', 'mse'], //metrica de perdidas y de error estándard
        );

        if (stopTraining) {
          modelo.stopTraining = true;
        }
      }
    }
  });
}

function convertirDatosATensores(data) {
  return tf.tidy(() => {
    // mezclar de manera aleatoria
    tf.util.shuffle(data);

    const entradas = data.map(d => d.cuartos);
    const etiquetas = data.map(d => d.precio);
    const tensorEntradas = tf.tensor2d(entradas,  [entradas.length, 1]);
    const tensorEtiquetas = tf.tensor2d(etiquetas,  [etiquetas.length, 1]);

    // para desregularizar hay que guardar variables
    const entradasMax = tensorEntradas.max();
    const entradasMin = tensorEntradas.min();

    const etiquetasMax = tensorEtiquetas.max();
    const etiquetasMin = tensorEtiquetas.min();

    // (datoEntrada-min) / (max-min)
    const entradasNormalizadas = tensorEntradas.sub(entradasMin).div(entradasMax.sub(entradasMin));
    const etiquetasNormalizadas = tensorEtiquetas.sub(etiquetasMin).div(etiquetasMax.sub(etiquetasMin));


    return {
      entradas: entradasNormalizadas,
      etiquetas: etiquetasNormalizadas,
      entradasMax,
      entradasMin,
      etiquetasMax,
      etiquetasMin,
    };
  });
}

async function verCurvaInferencia() {
  const data = await getData();
  const tensorData = await convertirDatosATensores(data);
  const {
    entradasMax, entradasMin, etiquetasMin, etiquetasMax
  } = tensorData;
  const [xs, preds] = tf.tidy(() => {
    const xs = tf.linspace(0, 1, 100);

    //el modelo está entrenado y se le va a aplicar desnormalización sobre un tensor
    const preds = modelo.predict(xs.reshape([100, 1]));

    const desnormX = xs
      .mul(entradasMax.sub(entradasMin))
      .add(entradasMin);

    const desnormY = preds
      .mul(etiquetasMax.sub(etiquetasMin))
      .add(etiquetasMin);

    return [ desnormX.dataSync(), desnormY.dataSync()];
  });

  const puntosPrediccion = Array.from(xs).map((val, i) => ({
    x: val, y: preds[i]
  }));

  const puntosOriginales = data.map((d) => ({
    x: d.cuartos, y: d.precio,
  }));

  tfvis.render.scatterplot(
    { name: 'Predicciones vs Originales'},
    {
      values: [puntosOriginales, puntosPrediccion],
      series: ['originales', 'predicciones']
    },
    {
      xLabel: 'Cuartos',
      yLabel: 'Precio',
      height: 300
    },
  );
}



async function run() {
  const data = await getData( );

  visualizarDatos(data);

  modelo = crearModelo();

  const tensorData = convertirDatosATensores(data);

  const { entradas, etiquetas } = tensorData;

  entrenarModelo(modelo, entradas, etiquetas);
}

async function cargarModelo() {
  const uploadJSONInput = document.getElementById('upload-json');
  const uploadBinaryInput = document.getElementById('upload-binary');

  modelo = await tf.loadLayersModel(tf.io.browserFiles(
    [uploadJSONInput.files[0], uploadBinaryInput.files[0]]
  ));
  console.log('Modelo cargado');
}

function detenerEntrenamiento() {
  stopTraining = true;
}

async function guardarModelo() {
  const saveResult = await modelo.save('downloads://modelo-regresion');
}

run();