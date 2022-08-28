import React, { useState } from "react";
import { useReach } from "../../hooks";
import "../../styles/css/ExtraStyles.css";

const PickAndGuess = () => {
    const { playable, firstTurn, makeDecision } = useReach();
    const [currentChoices, setCurrentChoices] = useState({});
    const [chosen, setChosen] = useState(false);
    const [possibleFingers, setPossibleFingers] = useState([0, 1, 2, 3, 4, 5]);

    const onChoosing = (choice) => {
        if (!chosen) {
            const possibleOutcomes = [];
            let outcomes = choice;
            while (outcomes <= (choice + 5)) {
                possibleOutcomes[outcomes - choice] = outcomes;
                outcomes++;
            }
            setPossibleFingers(possibleOutcomes);
            setCurrentChoices({ fingers: choice });
            setChosen(true);
        } else {
            setCurrentChoices({ ...currentChoices, guess: choice });
            makeDecision(currentChoices.fingers, choice);
        }
    };

    const Fingers = ({ outcome }) => {
        return (
            <div>
                <button className="buttonFinger" onClick={ () => onChoosing(outcome) }>{ outcome }</button>
            </div>
        );
    };

    return (
        <div >
            <h3>{ !firstTurn ? "It was a tie! Pick again." : "" }</h3>
            <h3>{ !playable ? "Please wait..." : !chosen ? "Pick your choice of fingers" : "Guess the total fingers played" }</h3>

            <div>
                <div>
                    { playable &&
                        possibleFingers.map((el, i) => <Fingers outcome={ el } key={ i } />)
                    }
                </div>
            </div>            
        </div>
    );
};

export default PickAndGuess;