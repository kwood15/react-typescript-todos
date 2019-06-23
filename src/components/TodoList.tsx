import React, { Component } from 'react';

type Todos = {
  id: number,
  title: string,
  completed: boolean
}

interface IProps {
  todos: Todos[]
}

// const TodoList = ({ todos }: IProps) => {
//   return todos.map(({ id, title, completed }: Todos) => <p key={id}>{title}{completed}</p>
// )}


class TodoList extends Component<IProps, {}> {
  public render() {
    const { todos } = this.props;
    return todos.map(({ id, title, completed }: Todos) => <p key={id}>{title}{completed}</p>)
  }
}

export default TodoList;