import React from "react";
import { useReach } from "../../hooks";
import "../../styles/css/ExtraStyles.css";

const sleep = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));


const WaitingForAttacher = () => {
    const { contract } = useReach();

    const copyToClipboard = async (button) => {
        navigator.clipboard.writeText(contract.ctcInfoStr);
    };

    return (
        <div>
            <h2> Waiting for Bob to join...</h2>
            <h3> Please give him the contract info:</h3>
            <div>
                <div>
                    <pre>{ contract.ctcInfoStr }</pre>
                </div>
                <div>
                <button className="button" onClick={ (e) => copyToClipboard(e.currentTarget.value) }>
                    Copy to clipboard
                </button>
                </div>
            </div>                        
        </div>
    );
};

export default WaitingForAttacher;