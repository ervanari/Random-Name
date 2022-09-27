import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const names = [
    "sukir",
    "udin",
    "thohir",
    "bejo",
    "camat",
    "ucil",
    "gareng",
    "bagong",
    "petruk",
    "semar"
];

const INTERVAL = 50;

const NameRandom = ({ names, interval }) => {
    const [name, setName] = useState(names[0]);
    const [isRendering, setIsRendering] = useState(true);
    const { width, height } = useWindowSize();

    useEffect(() => {
        if (isRendering) {
            const i = setInterval(() => {
                setName(names[Math.floor(Math.random() * names.length)]);
            }, interval);
            return () => clearInterval(i);
        }
    });
    return (
        <div>
            <Confetti
                style={!isRendering ? { display: "block" } : { display: "none" }}
                width={width}
                height={height}
            />
            <h1 onClick={() => setIsRendering(!isRendering)} className="names">
                {isRendering ? name : name}
            </h1>
        </div>
    );
};

export default NameRandom