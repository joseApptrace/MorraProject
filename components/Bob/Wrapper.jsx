import React,  { useEffect } from "react";
import "../../styles/css/ExtraStyles.css";

const Wrapper = ({ children }) => {
    useEffect(() => { document.title = "Morra Project" }, [])
    return (
        <div>
            <div className="box">
                <div className="rightImage">                           
                </div>
            </div>
            <div className="box space">
                Bob Turn
                <div>                        
                    <div>{ children }</div>
                </div>
            </div>
        </div>
    );
};

export default Wrapper;