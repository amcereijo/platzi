// Chat server

package main

import (
	"bufio"
	"fmt"
	"log"
	"net"
)

// estamos haciendo el componente que emite los mensajes
// los mensajes salientes
type client chan <- string

// mensajes entrantes
var (
	entrantes = make(chan client)
	salientes = make(chan client)
	mensajes = make(chan string)
)

// función broadcaster
func broadcaster() {
	//todos los clientes conectados
	clients := make(map[client]bool)
	for {
		select {
			case msg := <- mensajes:
				// emitir el mensaje entrante a todos los cliente conectados
				for cli := range clients {
					fmt.Println("Enviar mensaje '", msg, "' a ", cli)
					cli <- msg
				}
			case cli := <- entrantes:
				clients[cli] = true
			case cli := <-salientes:
				delete(clients, cli)
				close(cli)
			}
	}
}

//l
func handleConn(conn net.Conn) {
	// mensajes salientes
	ch := make(chan string)
	go clientWriter(conn, ch)

	quien := conn.RemoteAddr().String()
	ch <- "Tú eres " + quien

	mensajes <- quien + " se ha conectado"
	entrantes <- ch

	input := bufio.NewScanner(conn)
	for input.Scan() {
		mensajes <- quien + ":" +input.Text()
	}
	salientes <- ch
	mensajes <- quien + "se ha ido"
	conn.Close()
}

func clientWriter(conn net.Conn, ch <- chan string) {
	for msg := range ch {
		fmt.Fprintln(conn, msg)
	}
}

func main() {
	listener,err := net.Listen("tcp", "localhost:8005")
	if err != nil {
		log.Fatal(err)
	}
	go broadcaster()
	for {
		conn, err := listener.Accept()
		if err != nil {
			log.Print(err)
			continue
		}
		go handleConn(conn)
	}
}
