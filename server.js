import http from "node:http";
import { WebSocketServer} from "ws"
import fs from "node:fs/promises"
import path from "node:path"

const PORT = process.env.PORT || 9000;

const server = http.createServer((req,res) => {})

const wss = new WebSocketServer({server})

wss.on("connection",(wss) => {
    console.log("connected...")

    wss.on("message",(message) => {
        console.log("message received: ", message.toString())
    })

})


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})