import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import {ProtoGrpcType} from './proto/todo'
import {TodoServiceHandlers} from './proto/TodoPackage/TodoService'
import {Todos} from "./proto/TodoPackage/Todos";

const PORT = 8082
const PROTO_FILE = './proto/todo.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const todoPackage = grpcObj.TodoPackage

function main() {
    const server = getServer()

    server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),
        (err, port) => {
            if (err) {
                console.error(err)
                return
            }
            console.log(`Your server as started on port ${port}`)
            server.start()
        })
}

let todoList: Todos = {todos: []}

function getServer() {
    const server = new grpc.Server()

    server.addService(todoPackage.TodoService.service, {

        CreateTodo: (req, res) => {
            let new_todo = req.request
            console.log(new_todo)
            if (!todoList.todos) {
                todoList['todos'] = []
            }

            todoList.todos.push(new_todo)
            res(null, new_todo)
        },

        ListTodo: (req, res) => {

            res(null, todoList)
        },

        UpdateTodo: (req, res) => {
            const new_todo = req.request

            if (!todoList.todos) {
                const err = new Error('Empty list')
                res(err, null)

            } else {

                todoList.todos.splice(todoList.todos.findIndex(t => t.title === new_todo.title), 1, new_todo)

                res(null, null)

            }


        },

        DeleteTodo: (req, res) => {
            const todo = req.request

            todoList.todos!.splice(todoList.todos!.findIndex(t => t.title === todo.title), 1)

            res(null, null)
        },
    } as TodoServiceHandlers)

    return server
}

main()