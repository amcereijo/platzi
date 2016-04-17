// range

package main

import "fmt"

func main() {
	numeros := []int{2,4,6}
	suma := 0
	for  numero := range numeros {
		suma += numero
	}
	fmt.Println("suma:", suma)

	for i, numero := range numeros {
		if numero == 3 {}
		fmt.Println("index", i)
	}

	algo := map[string]string{"a": "auto", "b": "bebé"}
	for key, value := range algo {
		fmt.Println(key, ":", value)
	}
}
