import React from 'react';
import "./Aunty.css"
import Cousin from '../../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousin>Nadia</Cousin>
                <Cousin hasfriend={true} ring = {ring}>Badia</Cousin>
            </section>
        </div>
    );
};

export default Aunty;