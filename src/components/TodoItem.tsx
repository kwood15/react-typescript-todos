import React, { FunctionComponent } from 'react';
import { ITodo } from '../shared/interfaces/ITodo';

type TodoItemProps = {
  todo: ITodo;
  onDelete: (task: ITodo) => void;
};

export const TodoItem: FunctionComponent<TodoItemProps> = ({ todo, onDelete }) => {
  const onClick = () => {
    onDelete(todo);
  };

  return (
    <li>
      {todo.title} <button className="button is-primary" onClick={onClick}>X</button>
    </li>
  );
};
