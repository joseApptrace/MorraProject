import React from "react";
import { useReach, useClasses } from "../../hooks";
import "../../styles/css/ExtraStyles.css";

const Deploy = () => {
    const { deploy, wager, standardUnit } = useReach();

    return (
        <div>
            <div>
                <h3>Wager: <strong>{ wager }</strong> { standardUnit }</h3>
            </div>
            <div>
                <button
                    className="button"
                    onClick={ () => deploy() }
                >
                    Deploy
                </button>
            </div>
        </div>
    );
};

export default Deploy;