import React from 'react';
import './Result.css';
import Namecard from '../Namecard/Namecard';

const Result = ({ ans }) => {

    const namesJSX = ans.map((i) => {
        return <Namecard key={i} i={i} />
    });
    return (
        <div className="result-container">
            {namesJSX}
        </div>
    )
}





export default Result;