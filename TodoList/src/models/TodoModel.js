import { extendObservable } from 'mobx';

export default class TodoModel {
    store;
    id;
    title;
    completed;

    constructor(store, id, title, completed) {
        this.store = store;
        this.id = id;
        extendObservable(this, {
            title: title,
            completed: completed
        });
    }

    toggle() {
        this.completed = !this.completed;
    }

    destroy() {
        this.store.todos.remove(this);
    }

    setTitle(title) {
        this.title = title;
    }

    toJS() {
        return {
            id: this.id,
            title: this.title,
            completed: this.completed
        };
    }

    static fromJS(store, object) {
        return new TodoModel(store, object.id, object.title, object.completed);
    }

}
