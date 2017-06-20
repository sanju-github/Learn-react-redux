import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'; //importing action creator to container.
import { bindActionCreators } from 'redux'; //need this to wire up action creator to redux.for availability of action creator to all the reducers. so that reducers can choose.

class BookList extends Component{
    
    /*
    1. connection between react and readux is done with separate react-redux library. to do that
    we convert one of the component to container.
    2. A contianer is a react component that has a direct connection to the state managed by redux.
    3. we convert a compoenent to container.selection of which component to be container is decided by the fact that which parent component really cares about app state (data). And only parent component(container) which cares about state needs to be connected to redux.
    4. A container is a normal react component that gets bonded to the application state and we connect the two of them. Whenever application state changes. the container will re-render as well.
    
    */
    
    renderList(){
        
        return this.props.books.map((book) => { //using return of mapStateToProps
            return(
                <li
                key={book.title} 
                onClick={() => this.props.selectBook(book)} //calling action creator in container.
                className="list-group-item">
                {book.title}
                </li>
            );
        });
    }
    
    
    
    
    render() {
        return(
         <ul className ="list-group col-sm-4">
         {this.renderList()}
         </ul>
        )
    }
}

function mapStateToProps(state){ //application state as argument. Here state contains all the application data. this function is connect react to redux.
    //Whatever is returend will show up as props inside of BookList container.
    return {
        
        books: state.books //key is books and value state.books is from BookReducer.
    };
    
}

//Anything returned from this function will end up as props on the BookList container.
function mapDispatchToProps(dispatch){
    
    //whenever selectBook is called, the result should eb passed to all of our reducers.
    //key selectBook and value selectBook i.e action creator
    return bindActionCreators({ selectBook: selectBook}, dispatch); 
    
}


//Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps,mapDispatchToProps)(BookList); // here mapStateToProps is function and BookList is a component and produces a container. The container is a component that is aware of the state which is contained by redux.