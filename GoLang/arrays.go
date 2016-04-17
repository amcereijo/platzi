// Arrays

package main

import "fmt"

func main() {
	// declarar un array con 5 strings cada uno, inicializado con 0
	var nombres [5]string

	// delcarar array con 5 strings, inicializado con valores de string
	amigos := [5]string{"Rakel", "isable", "Fernando", "Enrique", "José"}

	// Asignar el seundo array al primero y deplegar los resultados del primero
	nombres = amigos

	// Mostrar el valor de la cadena y la dirección de cada elemento
	for i, nombre := range nombres {
		fmt.Println(i, nombre, &nombres[i])
	}
}
