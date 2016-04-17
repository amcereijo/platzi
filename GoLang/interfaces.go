// interfaces


package main

import "fmt"

// declarar una interfaz llamada speaker con un método speak
type speaker interface {
	speak()
}

// declarar un struct llamada ingles que representa a una persona que hable inglés
type ingles struct {

}
// declarar un struct llamada spanish que representa a una persona que hable spanish
type spanish struct {

}
// implementar la interface speaker para cada struct usando un valor y string "hello world" y "Hola mundo"
func (ingles) speak() {
	fmt.Println("Hello world")
}
func (spanish) speak() {
	fmt.Println("Hola mundo")
}

func main() {
	// declarar una variable del tipo speaker y asignarle una direción de tipo ingles y llamar a método
	var speaker speaker

	var i ingles
	speaker = i
	speaker.speak()

	// declarar una variable del tipo speaker y asignarle una direción de tipo spanish y llamar a método
	var s spanish
	speaker = s
	speaker.speak()

	decirHola(new(ingles))
	decirHola(&spanish{})
}

// abstare la funcionlidad de speak
func decirHola(sp speaker) {
	sp.speak()
}
