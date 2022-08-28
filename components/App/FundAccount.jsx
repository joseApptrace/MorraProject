import React, { useState } from "react";
import { useReach } from "../../hooks";
import "../../styles/css/ExtraStyles.css";

const FundAccount = () => {
    const { user, standardUnit, defaultFundAmt, fundAccount, skipFundAccount } = useReach();
    const [amount, setAmount] = useState({ amt: defaultFundAmt });

    return (
        <div className="generalContainer">
            <h2>Account Balance: { user.balance } { standardUnit }</h2>

            <h4>
                Do you want to add { standardUnit }'s to your account?
            </h4>
            <div className="fundActionContainer">
                <div>
                    <input                        
                        type="number"
                        placeholder={ defaultFundAmt }
                        onChange={ (e) => setAmount({ amt: e.currentTarget.value }) }
                    />                    
                </div>
                <div className="fundButtons">
                    <button className="button" onClick={ () => fundAccount(amount.amt) }>Fund Account</button>
                    <button className="button" onClick={ () => skipFundAccount() }>Skip</button>
                </div>
            </div>              
        </div>
    );
};

export default FundAccount;