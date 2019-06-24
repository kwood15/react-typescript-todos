import React, { FunctionComponent } from 'react';
import { ITodo } from '../shared/interfaces/ITodo';

type AddTodoItemProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  todo: ITodo;
}

export const AddTodoItem: FunctionComponent<AddTodoItemProps> = ({
  onChange,
  onAdd,
  todo
}) => (
  <form onSubmit={onAdd}>
    <input type="text" placeholder="Add Todo" onChange={onChange} value={todo.title} />
    <button type="submit">Add a todo</button>
  </form>
);
