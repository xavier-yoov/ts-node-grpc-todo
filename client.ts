import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import {ProtoGrpcType} from './proto/todo'
import {Todo} from "./proto/TodoPackage/Todo";
import {Status} from "./proto/TodoPackage/Status";

const PORT = 8082
const PROTO_FILE = './proto/todo.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType


const client = new grpcObj.TodoPackage.TodoService(
    `0.0.0.0:${PORT}`, grpc.credentials.createInsecure()
)

const deadline = new Date()
deadline.setSeconds(deadline.getSeconds() + 5)
client.waitForReady(deadline, (err) => {
    if (err) {
        console.error(err)
        return
    }
    onClientReady()
})

function onClientReady() {

    const todos: Todo[] = [
        {title: "Buy cat food", status: Status.Pending},
        {title: "Buy dog food", status: Status.Pending},
        {title: "Buy bird food", status: Status.Pending},
        {title: "Buy fist food", status: Status.Pending},
    ]

    for (let todo of todos) {

        client.CreateTodo(todo, (err, result) => {
            if (err) {
                console.error(err)
                return
            }
            console.log(result)
        })

    }

    client.ListTodo({}, (err, result) =>{
        if(err){
            console.log(err)
            return
        }

        console.log(err)
    })


    client.UpdateTodo({
        title: "Buy cat food",
        status: Status.Completed
    }, (err, result) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(result)
    })

    client.DeleteTodo({title: "Buy bird food", status: Status.Pending}, (err, result) => {
        if (err) {
            console.error(err)
            return
        }

        console.log(result)
    })

    client.ListTodo({}, (err, result) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(result)
    })
}

