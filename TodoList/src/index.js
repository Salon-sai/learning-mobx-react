import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './components/todoApp';
import TodoStore from './store/todoStore';
import ViewStore from './store/ViewStore';
import registerServiceWorker from './registerServiceWorker';
import 'todomvc-app-css/index.css';
import 'todomvc-common/base.css';

var todoStore = TodoStore.fromJS([]);
var viewStore = new ViewStore();

todoStore.subscribeLocalstorageToStore();

ReactDOM.render(<TodoApp todoStore={todoStore} viewStore={viewStore} />, document.getElementById('root'));
registerServiceWorker();
