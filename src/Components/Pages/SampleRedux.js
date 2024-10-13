import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../Store/Features/Count/CountSlice";


function SampleRedux() {

    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();

    return(
        <>
            <p>
                {count}    
            </p>
         <p>
            <button name="Increment" onClick={()=>dispatch(increment())}>+</button>
            <button name="Decrement" onClick={()=>dispatch(decrement())}>-</button>
         </p>
         
        </>
    )

}

export default SampleRedux;
