import React, { FunctionComponent } from 'react';
import { ITodo } from '../shared/interfaces/ITodo';

type TodoItemProps = {
  todo: ITodo;
  onDelete: (id: string) => void;
};

export const TodoItem: FunctionComponent<TodoItemProps> = ({ todo, onDelete }) => (
  <li>
    {todo.title} <button className="button is-primary" onClick={() => onDelete(todo.id)}>X</button>
  </li>
);
