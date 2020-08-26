import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Login } from './components/Login';
import {TodoApp} from "./TodoApp";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

localStorage.setItem("username", "juan");
localStorage.setItem("password", "juan1234");

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false }
        this.handleLogginApp = this.handleLogginApp.bind(this);
    }

    render() {

        const LoginView = () => (
            <Login fun={this.handleLogginApp.bind(this)}/>
        );
        
        const TodoAppView = () => (
            <TodoApp/>
        );

        let lis;
        if (this.state.isLoggedIn) {
        lis = <div><li><Link to="/login">Login</Link></li> 
                <li><Link to="/todo">Todo</Link></li></div>;
        } else {
        lis = <li><Link to="/login">Login</Link></li>;
        }
        
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        {lis}
                    </ul>
                    <div>
                        <Route path="/todo" component={TodoAppView}/>
                        <Route path="/login" component={LoginView}/>
                    </div>
                </div>
            </Router>
        );
    }

    handleLogginApp(ans) {
        this.setState({
            isLoggedIn: ans
        });
        window.location.replace("/todo")
    }

}

export default App;
