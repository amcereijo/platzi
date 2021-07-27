let net;
let count = 0;

const imgEl = document.getElementById('img');
const descEl = document.getElementById('descripcion_imagen');
const webcamElement = document.getElementById('webcam');
const descConsole = document.getElementById('console');
const descConsole2 = document.getElementById('console2');
const classifier = knnClassifier.create();

async function app() {
  net = await mobilenet.load();

  const result = await net.classify(imgEl);
  displayImagePrediction();

  webcam = await tf.data.webcam(webcamElement);
  // setInterval(async () => {
  //   const img = await webcam.capture();
  //   const imgResult = await net.classify(img);
  //   descConsole.innerHTML = 'prediction:' + imgResult[0].className + ' probability:' + imgResult[0].probability;
  //   // limpiar memoria
  //   img.dispose();
  // }, 2000);

  while(true) {
    const img = await webcam.capture();

    const imgResult = await net.classify(img);

    const activation = net.infer(img, "conv_preds");

    try {
      const resultClassify = await classifier.predictClass(activation);
      const classes = ['Untrained', 'Gato', 'Angel', 'OK', 'Rock'];
      descConsole2.innerHTML = classes[resultClassify.label];
    } catch {}

    descConsole.innerHTML = 'prediction:' + imgResult[0].className + ' probability:' + imgResult[0].probability;

    // limpiar memoria
    img.dispose();

    await tf.nextFrame();
  };
}

imgEl.onload = async function() {
  displayImagePrediction();
}

async  function addExample(classId) {
  console.log('added exmaple');
  const img = await webcam.capture();
  const activation = net.infer(img, true);
  classifier.addExample(activation, classId);

  img.dispose();
}

async function displayImagePrediction() {
  try {
    result = await net.classify(imgEl);
    descEl.innerHTML = JSON.stringify(result, null, 2);
  } catch {}
}

async function cambiarImagen() {
  imgEl.src = "https://picsum.photos/200/300?random="+ count;
  count += 1;
}

app();