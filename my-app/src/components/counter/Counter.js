import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, setCustom} from "../../redux/state/counter/CounterSlice";


const Counter = () => {

    const myNumber = useRef();
    const count=useSelector((state)=>state.Counter.value);
    const Dispatch=useDispatch();

    return (
        <div>
            <div className='card'>
                <div className='card bg-secondary px-5 py-4'>
                    <h2>My Counter App</h2>
                </div>

                <div className='card-body bg-light'>
                    <h1 className='m-3 '>{count}</h1>
                    <button onClick={()=>{Dispatch(increment())}} className='btn btn-lg bg-primary text-light m-3 '>Increase</button>
                    <button onClick={()=>{Dispatch(decrement())}} className='btn btn-lg bg-danger text-light m-3'>Decrease</button>
                </div>

                <div className='card-body bg-light'>
                    <input ref={myNumber} className='form-control my-3' type="number" placeholder="Enter any Number"/>
                    <button onClick={()=>Dispatch(setCustom(Number(myNumber.current.value)))} className='btn btn-lg bg-dark text-light m-3 w-50'>Set Value</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;

