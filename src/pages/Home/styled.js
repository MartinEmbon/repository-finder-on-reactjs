import styled from "styled-components"

export const HomeContainer = styled.div `
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100vh;
`

export const Content = styled.div `
    width:100vw;
    display:flex;
    align-items:center;
    justify-content:center;
    
`

export const Input = styled.input `
    border: 1px solid #ddd;
    height:1.5rem;
    padding:0 .5rem;
    border-radius: .25rem 0 0 .25rem;
    margin-right:1rem;
    &:focus,
    &:active{
        outline:none;
        box-shadow:none;
    }
`

export const Button = styled.button `
    height:2rem;
    border:1px solid #000;
    background:#000;
    color:#fff;
    border-radius:.25rem 0 0 .25rem;
    &:focus,
    &:active{
        outline:none;
        box-shadow:none;
    }
`

export const ErrorMsg = styled.p `
    color:red;
    display: block;
    
    font-size:1rem;
    font-weight:600;
    margin-top:1rem;
`



