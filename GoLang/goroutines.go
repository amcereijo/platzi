// Goruoutines

package main

import (
	"fmt"
	"runtime"
	"sync"
)

// crear programa con 2 funcions anónimas

// La 1ª función , cuenta de 10 a 0
//Mostrar cada número con un identificador pra cada goroutine
//crear goroutines a partir de estas funciones y no permitir que main()
//termine hasta que se complente todas las goroutine

//ejecutar el programa en paralelo


// init se ejecuta antes de main()
func init() {
	// reservar (allocate) un procesador para el scheduler
	runtime.GOMAXPROCS(1)
}

func main() {
	//declarar wait group para iniciar el conteo en las 2 goroutine
	var waitGroup sync.WaitGroup
	waitGroup.Add(2)

	fmt.Println("Iniciar Goroutines")

	// delcarar función anónima y crear goroutine 
	go func() {
		for count := 100; count >= 0; count -- {
			fmt.Printf("[A:%d]\n", count)
		}
		//Avisar a main de que terminams
		waitGroup.Done()
	}()

	// delcarar función anónima y crear goroutine 
	go func() {
		for count := 0; count <= 100; count ++ {
			fmt.Printf("[B:%d]\n", count)
		}
		//Avisar a main de que terminams
		waitGroup.Done()
	}()

	// esperar a que temrinen las goroutines
	fmt.Println("Esperando a que terminen")

	waitGroup.Wait()

	fmt.Println("\nFinalizado")


}