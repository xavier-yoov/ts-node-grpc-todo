// Original file: proto/todo.proto

import type { Status as _TodoPackage_Status } from '../TodoPackage/Status';

export interface Todo {
  'title'?: (string);
  'status'?: (_TodoPackage_Status | keyof typeof _TodoPackage_Status);
}

export interface Todo__Output {
  'title'?: (string);
  'status'?: (_TodoPackage_Status);
}
