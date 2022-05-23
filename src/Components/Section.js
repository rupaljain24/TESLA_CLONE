import React from 'react'
import styled from 'styled-components'
import  Fade  from 'react-reveal/Fade'

function Section({title,description,backgroundImg}) {
    console.log(backgroundImg)
  return (
    <Wrapper bg={backgroundImg}>
        <Fade bottom>

        <Text>
            <h1>{title}</h1>
            <p>{description}</p>
        </Text>

        </Fade>
        <ButtonGroup>
            <Fade bottom>
            <ButtonWrapper>
            <SingleButton>
                Custom Order
            </SingleButton>
            <SingleButton variant='NA'>
                Existing Inventory
            </SingleButton>
        </ButtonWrapper>
            </Fade>
        <DownArrow src="down-arrow.svg" />
        </ButtonGroup>
    



    </Wrapper>
  )
}
export default Section

const Wrapper=styled.div`
z-index:1;
padding-top:1rem;
// border: 1px solid black;
height:100vh;
width:100vw;
// background-image: url('/model-s.jpg');
background-image:${props => `url('/${props.bg}')`};
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
`
const Text=styled.div`
font-size:20px;
text-align:center;
padding-top:6rem;
`
const ButtonWrapper=styled.div`
margin-bottom:4rem;
display:flex;

align-items:center;
@media (max-width: 786px){
    flex-direction:column;
}
`
const ButtonGroup=styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
// border:10px solid black;
`

const SingleButton=styled.button`
margin:0.5rem;
// background-color:rgba(23,26,32,0.8);
background-color:${props=>props.variant==='NA'?'white':'rgba(23,26,32,0.8)'};
align-items:center;
//color:white;
color:${props=>props.variant==='NA'?'black':'white'};
height:2.5rem;
width:20rem;
cursor:pointer;
border-radius:100px;
`
const DownArrow=styled.img`
height:2.5rem;
align-item:center;
animation: animateDown infinite 1.5s
`
