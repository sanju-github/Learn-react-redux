import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
    
    books: BooksReducer, //key is books and value is BooksReducer (returned from reducer_books function)
    activeBook: ActiveBook
    
});

export default rootReducer;