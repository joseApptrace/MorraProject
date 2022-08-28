import React from "react";
import { useReach } from "../../hooks";
import "../../styles/css/ExtraStyles.css";

const Done = () => {
    const { outcome, total, who } = useReach();

    return (
        <div>
            <h2 >
                Thank you for playing.
            </h2>
            <h3 >
                { outcome }
                <br />
                The total fingers played were { total }, and { who } guessed it right.
            </h3>
        </div>
    );
};

export default Done;