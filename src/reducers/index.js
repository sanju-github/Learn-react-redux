import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
    
    books: BooksReducer //key is books and value is BooksReducer (returned from reducer_books function)
    
});

export default rootReducer;