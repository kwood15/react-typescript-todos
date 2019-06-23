import React, { Component } from 'react';
import TodoList from './components/TodoList';

type Todos = {
  id: number,
  title: string,
  completed: boolean
}

interface IState {
  todos: Todos[]
}

class App extends Component<{}, IState> {
  state = {
    todos: []
  }

  componentDidMount() {
    this.setState({
      todos: [
        {
          id: 1,
          title: 'Passport',
          completed: false
        },
        {
          id: 2,
          title: 'Charger',
          completed: false
        },
        {
          id: 3,
          title: 'Travel Insurance',
          completed: false
        },
      ]
    })
  }
  
  public render() {
    const { todos } = this.state;

    return (
      <TodoList todos={todos} />
    );
  }
}

export default App;
