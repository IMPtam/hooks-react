import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherCount, setOtherCount] = useState(false);
    const toggleState = () => {
        setOtherCount(!otherCount);
    };
    useEffect(() => {
        renderCount.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>render count:{renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleState}>
                Кнопка увеличить
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
