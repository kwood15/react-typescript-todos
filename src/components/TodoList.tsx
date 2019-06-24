import React, { FunctionComponent } from 'react';
import { ITodo } from '../shared/interfaces/ITodo';
import { TodoItem } from './TodoItem';

type TodoListProps = {
  todos: ITodo[];
  onDelete: (id: string) => void;
};

export const TodoList: FunctionComponent<TodoListProps> = ({
  todos,
  onDelete
}) => (
  <ul>
    {todos.map((todo: ITodo) => (
      <TodoItem key={todo.id} id={todo.id} todo={todo} onDelete={onDelete} />
    ))}
  </ul>
);
