import React, { useState } from "react";
import { useReach } from "../../hooks";
import "../../styles/css/ExtraStyles.css";

const Attach = () => {
    const [ctcInfoStr, setCtcInfoStr] = useState("");
    const { attach } = useReach();

    return (
        <div>
            <h3 >Please paste the contract info:</h3>
            <div>
                <div>
                    <input
                        className="setContractTextbox"                  
                        type="text"
                        placeholder="Enter contract info"
                        onChange={ (e) => setCtcInfoStr(e.currentTarget.value) }
                    />
                </div>
                <div>
                    <button className="button" disabled={ !ctcInfoStr } onClick={ () => attach(ctcInfoStr) }>
                        Attach
                    </button>
                </div>
            </div>            
        </div>
    );
};

export default Attach;