import React from 'react';

//Propriedades
//Propriedade children
export default function Header({children}){
    return(
        <header>
            <h1>{children}</h1>
        </header>
    );
}
