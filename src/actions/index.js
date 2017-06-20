//action creators
// we need to wired up action creators to redux for availablity.

export function selectBook(book){
    //console.log('A book has been selected:',book.title);
    //selectBook is an action creator , it needs to return an action,an object with a type property.And we have payload (data)
    return {
        
        type: 'BOOK_SELECTED', //always uppercase
        payload: book
        
    };
    
}