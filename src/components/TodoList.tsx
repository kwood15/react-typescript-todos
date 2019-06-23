import React, { FunctionComponent } from 'react';
import { ITodo } from '../shared/interfaces/ITodo';
import { TodoItem } from './TodoItem';
import uuidv4 from  'uuid/v4';

type TodoListProps = {
  todos: ITodo[];
  onDelete: (todo: ITodo) => void;
};

export const TodoList: FunctionComponent<TodoListProps> = ({
  todos,
  onDelete
}: TodoListProps) => (
  <ul>
    {todos.map((todo: ITodo) => (
      <TodoItem key={uuidv4()} todo={todo} onDelete={onDelete} />
    ))}
  </ul>
);
