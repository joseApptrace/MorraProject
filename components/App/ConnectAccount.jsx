import React from "react";
import { useReach } from "../../hooks";
import "../../styles/css/ExtraStyles.css";

const ConnectAccount = () => {
    const { connectAccount } = useReach();

    return (
        <div className="generalContainer">
            <div>
                <span>Please wait while we connect your account. If this takes more than a few seconds, there may be something wrong.</span>
            </div>
            <div>
                <button className="button" onClick={ connectAccount }>
                    Connect Wallet
                </button>
            </div>
        </div>
    );
};

export default ConnectAccount;