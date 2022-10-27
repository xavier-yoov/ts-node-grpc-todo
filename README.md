# ts-grpc-node-todo

A todo app using gRPC, node-js and typescript

## Project setup

```
yarn install
```

## Complie .proto file

```
yarn proto:gen
```

in order to make the script work. Make sure to change the permission
```
sudo chmod 755 proto-gen.sh
```

### Run gRPC server

```
yarn start
```

### Run client

```
yarn client
```
