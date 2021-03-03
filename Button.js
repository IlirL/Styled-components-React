import React from 'react'
import styled, {css} from 'styled-components'


// const StyledButton  = styled.button`
// padding:1rem 1.5rem;
// font-size:1.8rem;
// // color: ${({primary}) => (primary ? 'red' : "#fff")};
// color:#333;
// outline:none;
// boder:none;
// margin-bottom:1rem;
// background-color:#333;

// ${({primary})=>
//     primary && 
//     css`
//     color:red;
//     background-color:${({bgColor}) => bgColor};
//     `

// }
// `;

const StyledButton = styled.button`
    background-color:white;
    color:palevioletred;
    font-size:1.2rem;
    margin:1rem;
    padding:0.5rem 1rem;
    border:1px solid palevioletred;
    border-radius:3px;

    ${({primary}) => 
    primary && 
    css`
    background-color:palevioletred;
    color:white;
    box-shadow:0 0.5rem 1.5rem rgba(0,0,0,.2);
    
    `
    }

    &:hover{
        color:white;
        background-color:palevioletred;
    }
`;

const SuperButton = styled(StyledButton)`
    font-size:2.5rem;
`


function Button({primary, bgColor, children}) {  
    return (
        <div>
        <StyledButton primary = {primary} bgColor = {bgColor}>{children}</StyledButton>
        <SuperButton>{children}</SuperButton>
        </div>
    )
}

export default Button
