import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const INTERVAL = 50;

const NameRandom = ({ names, interval }) => {
    const [name, setName] = useState(names[0]);
    const [isRendering, setIsRendering] = useState(true);
    const { width, height } = useWindowSize();
    const [tmpName, setTmpName] = useState()

    useEffect(() => {
        if (isRendering) {
            const i = setInterval(() => {
                setName(names[Math.floor(Math.random() * names.length)]);
            }, interval);

            const index = names.indexOf(tmpName);
            if (index > -1) {
                names.splice(index, 1);
            }
            return () => clearInterval(i);

        } else {
            setTmpName(name)
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