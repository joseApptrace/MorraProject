import React from "react";
import { useReach } from "../../hooks";

const DeployerOrAttacher = () => {
    const { selectDeployer, selectAttacher } = useReach();

    return (
        <div>
            <h2>Please select a role</h2>
            <div>
                <button className="button" onClick={ () => selectDeployer() } title="Set the wager, deploy the contract">Alice</button>                
            </div>
            <div>
                <button className="button" onClick={ () => selectAttacher() } title="Attach to the Deployer's contract">Bob</button>                
            </div>
        </div>
    );
};

export default DeployerOrAttacher;