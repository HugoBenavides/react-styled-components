import React from "react";
import styled from "styled-components"
import ImageFilter from "../../ImageFilter";

const Card = styled.div`
    box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.1) ;
    border-radius: 10px;
    margin: 2px 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 12px;
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    .type{
        font-weight: bold;
    }
`


export default ({cargo})=>{ //se creara automaticamete una card por cargo 
    console.log (cargo)
    const {id, type, value, from, date } = cargo // se destructura la informacion de cada uno de los cargo
    return (
        <Card>
            {ImageFilter(type)}
            <Info>
                <span className="type" >{type}</span>
                <span>{value}</span>
                <span>{from}</span>
            </Info>
            <span>{date}</span>
        </Card>
    )
};