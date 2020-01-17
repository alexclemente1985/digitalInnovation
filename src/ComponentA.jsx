import React from 'react';

const ComponentA = (props) => {
    return (
        <div>
            <h2>Componente A</h2>
            <div>{props.children}</div>
        </div>
    )
}

export default ComponentA;
