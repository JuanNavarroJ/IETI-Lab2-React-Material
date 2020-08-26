import React, {Component} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import { Button, Typography } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';

export class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <form className="todo-form">
                    <Typography 
                        variant="subtitle1" 
                        component="h2"
                        align="center"
                        color="primary">
                        New TODO
                    </Typography>
                    <br/>
                    <TextField 
                        required
                        id="outlined-search" 
                        label="Text:"
                        type="search" 
                        variant="outlined" 
                        onChange={this.handleTextChange}
                        value={this.state.text}
                        margin="dense"
                    />
                    <br/>
                    <br/>
                    <br/>
                    <TextField 
                        required
                        label="Priority:"
                        variant="outlined"
                        id="priority"
                        type="number"
                        onChange={this.handlePriorityChange}
                        value={this.state.priority}
                        margin="dense"
                    />
                    <br/>
                    <br/>
                    <br/>
                    <DatePicker
                        required
                        id="due-date"
                        selected={this.state.dueDate}
                        placeholderText="Due date"
                        onChange={this.handleDateChange}
                        margin="dense">
                    </DatePicker>
                    <br/>
                    <br/>
                    <br/>
                    <Button variant="outlined" onClick={this.handleSubmit}>
                        Add #{this.state.items.length + 1}
                    </Button>
                </form>
                <br/>
                <br/>
                <TodoList todoList={this.state.items}/>
            </div> 
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }
}