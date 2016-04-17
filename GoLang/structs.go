// Structs

package main

import "fmt"

// declarar un struct para la info de un usuario(nombre, dirección, edad)
type usuario struct {
	nombre string
	direccion string
	edad int
}

func main() {
	// crear un valor y lo vamos a inicializar con valores
	user := usuario {
		nombre: "Usuario",
		direccion: "calle falsa",
		edad: 109,
	}

	// mostrar cada campo
	fmt.Println("Nombre: ", user.nombre)
	fmt.Println("Dirección: ", user.direccion)
	fmt.Println("Edad: ", user.edad)

	// delcarar e inicializar un struct anónimo con los mismos 3 campos
	user2 := struct {
		nombre string
		direccion string
		edad int
	} {
		nombre: "Usuario2",
		direccion: "calle super-falsa",
		edad: 209,
	}

	// mostrar el valor
	fmt.Println("Nombre: ", user2.nombre)
	fmt.Println("Dirección: ", user2.direccion)
	fmt.Println("Edad: ", user2.edad)
}