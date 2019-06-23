import React from 'react';

type Todos = {
  id: number,
  title: string,
  completed: boolean
}

interface IProps {
  todos: Todos[]
}

const TodoList = ({ todos }: IProps) => {
  return todos.map(({ id, title, completed }) => <p key={id}>{title}{completed}</p>
)}

export default TodoList;