import React, { Component } from 'react';
import { ITodo } from './shared/interfaces/ITodo';
import { AddTodoItem } from './components/AddTodoItem';
import { TodoList } from './components/TodoList';
import uuidv4 from 'uuid/v4';
import './custom.scss';

type AppState = {
  newTodo: ITodo;
  todos: ITodo[];
};

class App extends Component<{}, AppState> {
  state = {
    newTodo: {
      id: '',
      title: ''
    },
    todos: []
  };

  componentDidMount() {
    this.setState({
      todos: [
        {
          id: uuidv4(),
          title: 'Passport'
        },
        {
          id: uuidv4(),
          title: 'Suncream'
        },
        {
          id: uuidv4(),
          title: 'Euros'
        }
      ]
    });
  }

  private addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.state.newTodo.title !== '') {
      this.setState((previousState: AppState) => ({
        newTodo: {
          id: uuidv4(),
          title: ''
        },
        todos: [...previousState.todos, previousState.newTodo]
      }));
    }
  };

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: {
        ...this.state.newTodo,
        title: event.target.value
      }
    });
  };

  private deleteTodo = (id: string) => {
    this.setState((previousState: AppState) => {
      return {
        todos: [...previousState.todos.filter(todo => todo.id !== id)]
      };
    });
  };

  render() {
    const { todos, newTodo } = this.state;
    return (
      <div>
        <h2>Holiday Checklist</h2>
        <AddTodoItem
          onChange={this.handleChange}
          onAdd={this.addTodo}
          todo={newTodo}
          placeholder="Add Todo"
        />
        <TodoList todos={todos} onDelete={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
