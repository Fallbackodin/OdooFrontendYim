import React, { useState, useEffect } from "react";
import "../css/Calculator.css";

export default function Calculator() {
    const [userVal, setUserVal] = useState("0");

    const handleClick = (e) => {
        // console.log(e.target.value);

        if (!isNaN(e.target.value)) {
            console.log(e.target.value);

            if (userVal != "0") setUserVal(userVal + e.target.value);
            else setUserVal(e.target.value);
        }
    };

    return (
        <div className="calculator">
            <p className="calculator-val">{userVal}</p>
            <div className="calculator-button">
                <div className="calculator-row">
                    <button
                        className="calculator-column"
                        value="1"
                        onClick={handleClick}
                    >
                        1
                    </button>
                    <button
                        className="calculator-column"
                        value="2"
                        onClick={handleClick}
                    >
                        2
                    </button>
                    <button
                        className="calculator-column"
                        value="3"
                        onClick={handleClick}
                    >
                        3
                    </button>
                </div>
                <div className="calculator-row">
                    <button
                        className="calculator-column"
                        value="4"
                        onClick={handleClick}
                    >
                        4
                    </button>
                    <button
                        className="calculator-column"
                        value="5"
                        onClick={handleClick}
                    >
                        5
                    </button>
                    <button
                        className="calculator-column"
                        value="6"
                        onClick={handleClick}
                    >
                        6
                    </button>
                </div>
                <div className="calculator-row">
                    <button
                        className="calculator-column"
                        value="7"
                        onClick={handleClick}
                    >
                        7
                    </button>
                    <button
                        className="calculator-column"
                        value="8"
                        onClick={handleClick}
                    >
                        8
                    </button>
                    <button
                        className="calculator-column"
                        value="9"
                        onClick={handleClick}
                    >
                        9
                    </button>
                </div>
                <div className="calculator-row">
                    <button
                        className="calculator-column"
                        value="0"
                        onClick={handleClick}
                    >
                        0
                    </button>
                    <button
                        className="calculator-column"
                        value="Random"
                        onClick={handleClick}
                    >
                        Random
                    </button>
                    <button
                        className="calculator-column"
                        value="Start"
                        onClick={handleClick}
                    >
                        Start
                    </button>
                </div>
            </div>
        </div>
    );
}
