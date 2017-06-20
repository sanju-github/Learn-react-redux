/*
1. We need a provision to change the application state. Like below we hardcoded the data and applicaiton state will be always same. So we have actions and action creators to to deal with dynamic data in the sense dynamic piece of application state.
2. Everything in redux application starts off with an event triggered by a user either directly or indirectly. This event can call action creator it is a function that return an action(object).That object automatically sent to all the different reducers in our appllication. reducers can choose depending on the action to return a different piece of state depending on what the action is.That newly retuned piece of state then gets piped into the application state and then application state then gets pumped into our react application which causes all of our components to re-render with new props.
3. Object returned has type that describes the type of action that was just triggered(event). The action can also have data which further describes the action.Based on type (action.type), any particular reducer gets selected to generate new application piece of state by using that action data. once all the actions and respective reducers generate new application state. All the new pieces of application state is now available to containers to re-render with new props.
4.

*/

export default function(){
    return[
        
        {title: 'Javascript: The Good parts', pages: 101},
        {title: 'Harry Potter', pages: 39},
        {title: 'The Dark Tower', pages: 85},
        {title: 'Eloquent Ruby', pages: 1}
        
    ]
}