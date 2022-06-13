import React from "react";
import '../App.css';

function MainContent(){
    return(
        <main>
            <h1 className="main--title">Fun Fact About React</h1>
            <ul className="main--facts">
                <li>A Simple Component</li>
                <li>A Stateful Component</li>
                <li>An Application</li>
            </ul>
        </main>
    );
}

export default MainContent;