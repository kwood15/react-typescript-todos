import React, { FunctionComponent } from 'react';
import { ITodo } from '../shared/interfaces/ITodo';

type TodoItemProps = {
  id: string;
  todo: ITodo;
  onDelete: (id: string) => void;
};

export const TodoItem: FunctionComponent<TodoItemProps> = ({ todo, id, onDelete }) => (
  <li>
    {todo.title} <button className="button is-primary" onClick={() => onDelete(id)}>X</button>
  </li>
);
