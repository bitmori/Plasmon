import React from "react";
import ReactDOM from "react-dom";
import Bar from './plasmon/bar';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let children = [
            <Bar type="header" title="app.js - Plasmon"/>,
            <div className="window-content"></div>,
            <Bar type="footer" title="Plasmon2"/>
        ];
        return <div className="window">{children}</div>;
    }
}

ReactDOM.render(
    <App/>
    ,
    document.getElementById('app-main')
);
