// Original file: proto/todo.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { Todo as _TodoPackage_Todo, Todo__Output as _TodoPackage_Todo__Output } from '../TodoPackage/Todo';
import type { Todos as _TodoPackage_Todos, Todos__Output as _TodoPackage_Todos__Output } from '../TodoPackage/Todos';

export interface TodoServiceClient extends grpc.Client {
  CreateTodo(argument: _TodoPackage_Todo, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todo__Output) => void): grpc.ClientUnaryCall;
  CreateTodo(argument: _TodoPackage_Todo, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todo__Output) => void): grpc.ClientUnaryCall;
  CreateTodo(argument: _TodoPackage_Todo, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todo__Output) => void): grpc.ClientUnaryCall;
  CreateTodo(argument: _TodoPackage_Todo, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todo__Output) => void): grpc.ClientUnaryCall;
  createTodo(argument: _TodoPackage_Todo, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todo__Output) => void): grpc.ClientUnaryCall;
  createTodo(argument: _TodoPackage_Todo, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todo__Output) => void): grpc.ClientUnaryCall;
  createTodo(argument: _TodoPackage_Todo, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todo__Output) => void): grpc.ClientUnaryCall;
  createTodo(argument: _TodoPackage_Todo, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todo__Output) => void): grpc.ClientUnaryCall;
  
  DeleteTodo(argument: _TodoPackage_Todo, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  DeleteTodo(argument: _TodoPackage_Todo, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  DeleteTodo(argument: _TodoPackage_Todo, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  DeleteTodo(argument: _TodoPackage_Todo, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  deleteTodo(argument: _TodoPackage_Todo, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  deleteTodo(argument: _TodoPackage_Todo, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  deleteTodo(argument: _TodoPackage_Todo, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  deleteTodo(argument: _TodoPackage_Todo, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  
  ListTodo(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todos__Output) => void): grpc.ClientUnaryCall;
  ListTodo(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todos__Output) => void): grpc.ClientUnaryCall;
  ListTodo(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todos__Output) => void): grpc.ClientUnaryCall;
  ListTodo(argument: _google_protobuf_Empty, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todos__Output) => void): grpc.ClientUnaryCall;
  listTodo(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todos__Output) => void): grpc.ClientUnaryCall;
  listTodo(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todos__Output) => void): grpc.ClientUnaryCall;
  listTodo(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todos__Output) => void): grpc.ClientUnaryCall;
  listTodo(argument: _google_protobuf_Empty, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todos__Output) => void): grpc.ClientUnaryCall;
  
  UpdateTodo(argument: _TodoPackage_Todo, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todo__Output) => void): grpc.ClientUnaryCall;
  UpdateTodo(argument: _TodoPackage_Todo, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todo__Output) => void): grpc.ClientUnaryCall;
  UpdateTodo(argument: _TodoPackage_Todo, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todo__Output) => void): grpc.ClientUnaryCall;
  UpdateTodo(argument: _TodoPackage_Todo, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todo__Output) => void): grpc.ClientUnaryCall;
  updateTodo(argument: _TodoPackage_Todo, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todo__Output) => void): grpc.ClientUnaryCall;
  updateTodo(argument: _TodoPackage_Todo, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todo__Output) => void): grpc.ClientUnaryCall;
  updateTodo(argument: _TodoPackage_Todo, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todo__Output) => void): grpc.ClientUnaryCall;
  updateTodo(argument: _TodoPackage_Todo, callback: (error?: grpc.ServiceError, result?: _TodoPackage_Todo__Output) => void): grpc.ClientUnaryCall;
  
}

export interface TodoServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateTodo: grpc.handleUnaryCall<_TodoPackage_Todo__Output, _TodoPackage_Todo>;
  
  DeleteTodo: grpc.handleUnaryCall<_TodoPackage_Todo__Output, _google_protobuf_Empty>;
  
  ListTodo: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _TodoPackage_Todos>;
  
  UpdateTodo: grpc.handleUnaryCall<_TodoPackage_Todo__Output, _TodoPackage_Todo>;
  
}

export interface TodoServiceDefinition extends grpc.ServiceDefinition {
  CreateTodo: MethodDefinition<_TodoPackage_Todo, _TodoPackage_Todo, _TodoPackage_Todo__Output, _TodoPackage_Todo__Output>
  DeleteTodo: MethodDefinition<_TodoPackage_Todo, _google_protobuf_Empty, _TodoPackage_Todo__Output, _google_protobuf_Empty__Output>
  ListTodo: MethodDefinition<_google_protobuf_Empty, _TodoPackage_Todos, _google_protobuf_Empty__Output, _TodoPackage_Todos__Output>
  UpdateTodo: MethodDefinition<_TodoPackage_Todo, _TodoPackage_Todo, _TodoPackage_Todo__Output, _TodoPackage_Todo__Output>
}
