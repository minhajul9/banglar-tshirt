import React, { createContext } from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const RingContext = createContext('gold')

const Grandpa = () => {
    
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <RingContext.Provider value='Golden Ring'>
                <section className='flex'>
                    <Father></Father>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
            </RingContext.Provider>
        </div>
    );
};

export default Grandpa;