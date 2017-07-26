import {extendObservable} from 'mobx';
import { ALL_TODOS } from '../constants';

export default class ViewStore {
    todoBeingEdited;
    todoFilter;

    constructor(props) {
        extendObservable(this, {
            todoBeingEdited: null,
            todoFilter: ALL_TODOS
        });
    }
}
