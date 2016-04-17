// Mapas

package main

import "fmt"

func main() {
	// declarar y hacer un mapa de valores enteros con un string como llave
	departamentos := make(map[string]int)

	// llenar el mapa con 5 valores
	departamentos["Devs"] = 25
	departamentos["Marketing"] = 50
	departamentos["Ejecutivos"] = 4
	departamentos["Ventas"] = 60
	departamentos["Manteminiento"] = 8

	// iterar sobre el mapa para mostrar la llave y el valor
	for key, value := range departamentos {
		fmt.Printf("Dept: %s - Personas: %d\n", key, value)
	}
}
