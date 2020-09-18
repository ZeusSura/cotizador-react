import React from 'react'
import styled from "@emotion/styled";

const ErrorS = styled.div`
 background-color:red;
 color:#fff;
 margin-bottom:2rem;
 width:100%;
 text-align:center;
 padding:1rem;
`

const Error = ({mensaje})=> {


    return (
    <ErrorS>{mensaje}</ErrorS>
    )

}

export default Error;