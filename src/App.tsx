import React, { Component } from 'react';
import { ITodo } from './shared/interfaces/ITodo';
import { AddTodoItem } from './components/AddTodoItem';
import { TodoList } from './components/TodoList';

type AppState = {
  newTodo: ITodo;
  todos: ITodo[];
}

class App extends Component<{}, AppState> {
  state = {
    newTodo: {
      id: 0,
      title: ''
    },
    todos: []
  };

  componentDidMount() {
    this.setState({
      todos: [
        {
          id: 1,
          title: 'Passport'
        },
        {
          id: 2,
          title: 'Suncream'
        },
        {
          id: 3,
          title: 'Euros'
        }
      ]
    });
  }

  render() {
    const { todos, newTodo } = this.state;
    return (
      <div>
        <h2>Holiday Checklist</h2>
        <AddTodoItem onChange={this.handleChange} onAdd={this.addTodo} todo={newTodo} />
        <TodoList todos={todos} onDelete={this.deleteTodo} />
      </div>
    );
  }

  private addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState((previousState: AppState) => ({
      newTodo: {
        id: previousState.newTodo.id + 100,
        title: ''
      },
      todos: [...previousState.todos, previousState.newTodo]
    }));
  };

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: {
        ...this.state.newTodo,
        title: event.target.value
      }
    });
  };

  private deleteTodo = (todoToDelete: ITodo) => {
    this.setState((previousState: AppState) => {
      return {
        todos: [...previousState.todos.filter(todo => todo.id !== todoToDelete.id)]
      };
    });
  };
}

export default App;
