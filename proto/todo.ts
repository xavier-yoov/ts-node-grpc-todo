import type * as grpc from '@grpc/grpc-js';
import type { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { TodoServiceClient as _TodoPackage_TodoServiceClient, TodoServiceDefinition as _TodoPackage_TodoServiceDefinition } from './TodoPackage/TodoService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  TodoPackage: {
    Status: EnumTypeDefinition
    Todo: MessageTypeDefinition
    TodoService: SubtypeConstructor<typeof grpc.Client, _TodoPackage_TodoServiceClient> & { service: _TodoPackage_TodoServiceDefinition }
    Todos: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
}

