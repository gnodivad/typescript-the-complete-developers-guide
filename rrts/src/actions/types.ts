import { DeleteTodoAction, FetchTodosAction } from './todos';

export enum ActionTypes {
  fetchTodos = 0,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
