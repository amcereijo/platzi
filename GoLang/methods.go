// metodos

package main

import "fmt"

// delcarar un struct que representa un jugador(nombre, goles, partidos)
type jugador struct {
	nombre string
	goles int
	partidos int
}

// declara un método para calcular el promedio de goles de un jugador (partidos/goles)
func (j *jugador) average()float64 {
	return float64(j.partidos) / float64(j.goles)
}

func main() {
	// declarar un slice de varios jugadores
	jugadores :=[] jugador {
		{"carlos", 20, 60},
		{"fernando", 17, 30},
		{"alonso", 34, 60},
	}
	// iterar sobre el slice mostrando los jugadores y promedio de goles
	for _,j := range jugadores {
		fmt.Println(j.nombre, " : ",j.average())
	}
}