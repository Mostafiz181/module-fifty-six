import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({children,hasfriend,ring}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{children}</small></p>
            {hasfriend &&<Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousin;