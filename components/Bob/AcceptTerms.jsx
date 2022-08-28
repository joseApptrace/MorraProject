import React, { useState } from "react";
import { useReach } from "../../hooks";
import "../../styles/css/ExtraStyles.css";

const AcceptTerms = () => {
    const [disabled, setDisabled] = useState(false);
    const { wager, standardUnit, termsAccepted } = useReach();

    return (
        <div>
            <h2>The rules for this game:</h2>
            <h3>
                Wager: { wager } { standardUnit } <br/>
                Winner takes all <br />
                We play until there is a winner
            </h3>

            <button
                className="button"
                disabled={ disabled }
                onClick={ () => {
                    setDisabled(true);
                    termsAccepted();
                } }>
                Start
            </button>
        </div>
    );
};

export default AcceptTerms;