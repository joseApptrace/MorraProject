import React from "react";
import { useReach } from "../../hooks";
import "../../styles/css/ExtraStyles.css";

const SetWager = () => {
    const { handleWager, defaultWager, standardUnit, setWager } = useReach();
    return (
        <div >
            <br/>
            <span>The wager value is: { standardUnit }</span>            
            <input
                className="setWagerTextbox"                  
                type="number"
                placeholder={ defaultWager }
                onChange={ (e) => setWager(e.currentTarget.value) }                    
            />
            <br/>
            <button className="button" onClick={ () => handleWager() }>Set Wager</button>
        </div>
    );
};

export default SetWager;