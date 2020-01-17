import React from 'react';

const ComponentB = (props) => {
    return (
        <div>
            <h2>Componente B</h2>
            <div>{props.children}</div>
        </div>
        
    )
}

export default ComponentB;
