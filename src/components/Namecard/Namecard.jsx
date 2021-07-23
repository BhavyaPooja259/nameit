import React from 'react';
import './Namecard.css';


const namecheapURL = "https://www.namecheap.com/domains/registration/results/?domain=%27%3B";
const Namecard = ({ i }) => {
    return (
        <a target="_blank"
            rel="noreferrer"
            className="card-link"
            href={`${namecheapURL}${i}`}>
            <div className="result-name-card">
                <p className="result-name">{i}</p>
            </div>
        </a>
    )
}
export default Namecard;