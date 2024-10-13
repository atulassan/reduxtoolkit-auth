import React, {useReducer} from 'react';


function reducer(state, action) {
    switch (action.type) {
        case 'Increment': 
        return {count: state.count + 1};
        case 'Decrement':
        return {count: (state.count > 0) ? state.count - 1 : 0};
        default:
            return state;
    }
}

function UseReducerHook() {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return (
        <>
            <button onClick={()=>dispatch({type:'Increment'})}>Plus</button>
            <button onClick={()=>dispatch({type:'Decrement'})}>Plus</button>
            <p>Count: {state.count}</p>
        </>
    )
}

export default UseReducerHook;