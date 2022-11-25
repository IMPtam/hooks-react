import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherCount, setOtherCount] = useState("false");
    const toggleState = () => {
        setOtherCount((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };
    useEffect(() => {
        prevState.current = otherCount;
    }, [otherCount]);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>prev State:{prevState.current}</p>
            <p>current State:{otherCount}</p>
            <button className="btn btn-primary" onClick={toggleState}>
                Кнопка изменить
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
