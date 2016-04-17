//Channels

/*
	Escribir un problema que usa un buffer channel para mantener un 
	buffer de 4 string
	En main, mandar los string 'A','B','C' y 'D' al channel
	Crear 20 goroutines que reciben un string del channel
	Mostrar el valor y mandar el string de regreso al channel
	Cada goroutine se ejecuta haciendo esta tarea
	Permitir que la goroutine termine
*/

package main

import (
	"fmt"
	"sync"
	"runtime"
)

const (
	goroutines = 20
	capacidad = 4
)

//waitGroup se usa para esperar que el programa termine
var waitGroup sync.WaitGroup

// recursos es un buffer channel para manejar los strings
var recursos = make(chan string, capacidad)

// init se ejecuta antes de main()
func init() {
	// reservar (allocate) un procesador para el scheduler
	runtime.GOMAXPROCS(1)
}


func main() {
	// agregar el número de goroutines al wait group
	waitGroup.Add(goroutines)

	//Lanzar las goroutines necesarias para manejar el trabajo
	//asegurarnos de poner la llamada para saber que las goroutines terminaron

	for gr := 1; gr <= goroutines; gr++ {
		go func(gr int) {
			worker(gr)
			waitGroup.Done()
		}(gr)
	}

	// añadimos los strings
	for s :='A'; s < 'A'+capacidad; s++ {
		recursos <- string(s)
	}

	waitGroup.Wait()

}
// lanzamos  worker como una goroutines que procesa el trabajo del buffer channel
func worker(worker int) {
	//recibir una cadena del channel
	valor := <- recursos
	//Imprimir el valor
	fmt.Printf("Worker: %d : %s\n", worker, valor)

	// Poner el valor en buffer
	recursos <- valor
}