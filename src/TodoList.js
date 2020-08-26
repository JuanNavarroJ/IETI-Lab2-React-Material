import React from 'react';
import {Todo} from './Todo'
import { Typography } from '@material-ui/core';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <Todo key={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
            );
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>
                    <Typography 
                        variant="subtitle1" 
                        component="h2"
                        align="center"
                        color="primary"
                        fontWeight="fontWeightBold">
                        Task
                    </Typography></th>
                    <th>
                    <Typography 
                        variant="subtitle1" 
                        component="h2"
                        align="center"
                        color="primary"
                        fontWeight="fontWeightBold">
                        Priority
                    </Typography></th>
                    <th>
                    <Typography 
                        variant="subtitle1" 
                        component="h2"
                        align="center"
                        color="primary"
                        fontWeight="fontWeightBold">
                        Due Date
                    </Typography></th>
                </tr>
                </thead>
                <tbody >
                    {todoList}            
                </tbody>
            </table>
        );


    }

}