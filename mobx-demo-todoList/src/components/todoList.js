import React from 'react';
import {observer} from 'mobx-react';

import TodoItem from './todoItem';

@observer
export default class TodoList extends React.Component {
    render() {
        const store = this.props.store;
        return (
            <div>
                { store.report }
                <ul>
                    {
                        store.todos.map(
                            (todo, idx) => <TodoItem todo={ todo } key={ idx } />
                        )
                    }
                </ul>
                <button onClick={ this.onNewTodo }>New Todo</button>
                <button onClick={ this.seeList }>See the todos list</button>
            </div>
        )
    }

    onNewTodo = () => {
        this.props.store.addTodo(prompt('Enter a new todo:', 'coffee plz'));
    }

    seeList = () => {
        console.info(this.props.store.todos);
    }
}
