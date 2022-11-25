import React from "react";
import Card from "../common/Card";
// import SmallTitle from "../common/typografy/smallTitle";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");
    console.log(isAuth);
    const onLogin = () => {
        console.log("Вызвана функция авторизации");
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        console.log("Вызвана функция разлогинится");
        localStorage.removeItem("auth");
    };
    return (
        <Card>
            {" "}
            <Component
                // {...props}
                isAuth={isAuth}
                onLogOut={onLogOut}
                onLogin={onLogin}
            />
        </Card>
    );
};

export default withFunctions;

// <SimpleComponent {...props} />
// <SmallTitle>Auth</SmallTitle>
