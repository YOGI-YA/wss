import http from "node:http";
import { WebSocketServer} from "ws"


const PORT = process.env.PORT || 9000;

const server = http.createServer((req,res) => {})

const wss = new WebSocketServer({server})

wss.on("connection",() => {

})


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})