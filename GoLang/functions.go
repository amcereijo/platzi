// functions

package main

import "fmt"

// declarar un struct para guardar información de un usuario
type usuario struct {
	nombre string
	email string
}

// declarar la funcion que crea el valor y devuelve apuntadores de este tipo y un error como valor
func nuevoUsuario() (*usuario, error) {
	return &usuario{"user1", "user1@email.com"}, nil
}

func main() {
	// llamar a la función desde mainy devolver el valor
	u, err := nuevoUsuario()
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(*u)

	// hacer otra llamada a la función ignrando el valor y probando el error como valor
	_, err = nuevoUsuario()
	if err != nil {
		fmt.Println(err)
		return
	}
}