import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  details (index){
    let todos = this.state.todos;
    
        let todo = todos.find(function(todo){
          return todo.counter === index;
        })
    
        console.log(todo);
        
  }
  removeTodo(index){
    let todos = this.state.todos;

    let todo = todos.find(function(todo){
      return todo.counter === index;
    })

    console.log(todo);

    var index = todos.indexOf(todo);
    todos.splice(index,1);
    
        this.setState({
          todos:todos
        });
  }

  //adds new todo activity to the todo list
  addTodo(event){
    //prevents the form from submitting i.e. its default submit action
    event.preventDefault();
    let name= this.refs.name.value;
    let completed = this.refs.completed.value;
    let counter = this.state.counter;
    
    

    //creates new todo list to get the data from the input boses
    let todo = {
      name,completed,counter
    };

    counter+=1;

    //
    let todos = this.state.todos;

    todos.push(todo);   
    
    //Updates the todo list
    this.setState({
      todos:todos,
      counter:counter
    })

    console.log(this.state.counter);
    //refreshes the input boxes
    this.refs.todoForm.reset();
  }

  //constructor of the class component
  constructor(){
    super();
    this.details = this.details.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.addTodo=this.addTodo.bind(this);
    this.state={
      todos:[],
      title:'React Simple Todo application',
      counter:0
    }
  }


  render() {
    //gets title from the constructor
    let title = this.state.title;
    //get todos from the constructors
    let todos = this.state.todos;
    return (
      
      <div className="App">
        <h1>{title}</h1>
        <form ref="todoForm">
          <input type="text" ref="name"/>
          <input type="text" ref="completed"/>
          <button onClick={this.addTodo}>Add Todo</button>
        </form>
        <ul>
          {todos.map(todo => <li key={todo.counter}>{todo.name}
            <button onClick={this.removeTodo.bind(null,todo.counter)}> Remove </button>
            <button onClick={this.details.bind(null,todo.counter)}>View details</button>
            
            </li>)}
        </ul>
      </div>
    );
  }
}

export default App;
