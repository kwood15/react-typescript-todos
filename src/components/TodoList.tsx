import React from 'react';

type Todos = {
  id: number,
  title: string,
  completed: boolean
}

interface IProps {
  todos: Todos[]
}

const TodoList: React.FunctionComponent<IProps> = ({ todos }: IProps) => (
  <>
    {todos.map(({ id, title, completed }: Todos) => <p key={id}>{title}{completed}</p>)}
  </>
);

export default TodoList;