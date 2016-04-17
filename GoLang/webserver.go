// Web Server

package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", handler) // ada petición llama a un handler
	log.Fatal(http.ListenAndServe("localhost:8000", nil))
}

// handler each request
func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("URL.Path = %q", r.URL.Path)

	// write a response
	//fmt.Fprintf(w, "URL.Path = %q\n", r.URL.Path)

	// redirect to
	http.Redirect(w, r, "http://www.google.es", 301)
}
