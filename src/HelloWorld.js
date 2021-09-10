import React from 'react';
function Greeting() {
    return <span>Hello</span>;
}

function Mentor() {
    return <span>Ali</span>;
}

function HelloWorld() {
    return (
        <div>
            <Greeting />
            <Mentor />
        </div>
    );
}
export default HelloWorld;