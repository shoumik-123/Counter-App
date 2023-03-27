import React from 'react';
import Counter from "../components/counter/Counter";

function CounterPage() {
    return (
        <div>
            <div className='container mt-5'>

                <div className='row d-flex justify-content-center'>
                    <div className='col-md-6'>
                        <Counter/>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default CounterPage;