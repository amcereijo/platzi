// slices

package main

import "fmt"

func main() {
	// declarar slices de enteros vacío
	var numeros []int

	// crear un loop que mea 10 valores al slice creado
	for i:= 0; i < 10; i++ {
		numeros = append(numeros, i*10)
	}

	// iterar sobte el slices y mostrar cada valor
	for _, numero := range numeros {
		fmt.Println(numero)
	}

	// declarar un slices de 5 strings e inicializar con valores
	frutas := []string{"manzana", "naranja", "pera", "sandia", "aguacate"}

	// iterar sobte el slices y mostrar cada valor
	for i, fruta := range frutas {
		fmt.Printf("index: %d, Fruta: %s\n", i, fruta)
	}

	// tomcar un slices del primer y segund indice
	slice := frutas[1:3]
	// deplegar el valor y posición de cada uno de estos valores en el nuevo slice
	for i, fruta := range slice {
		fmt.Printf("Index: %d Fruta: %s\n", i, fruta)
	}

}