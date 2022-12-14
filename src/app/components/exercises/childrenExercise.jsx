import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ListComponent>
                <Component />
                <Component />
                <Component />
            </ListComponent>
        </CollapseWrapper>
    );
};
const ListComponent = ({ children }) => {
    return React.Children.map(children, (child, i) => {
        const config = {
            ...child.props,
            index: i + 1
        };
        console.log(child);
        return React.cloneElement(child, config);
    });
};

const Component = ({ index }) => {
    return <div>{index + " "}Компонент списка</div>;
};
Component.propTypes = {
    index: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
export default ChildrenExercise;
