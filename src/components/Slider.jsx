// import './slider.css'
import styled from 'styled-components'
import SummerLady from './images/summer.png'
import red from './images/red.png'
import black from './images/black.png'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'


 const Container = styled.div`
 width:100%;
 height:85vh;
 display:flex;
 position: relative;
 overflow:hidden;
 ${mobile({display:"none"})}`

 
  const Arrow = styled.div`
 width:50px;
 height:50px;
 background-color:white;
  border-radius:50%;
  display: flex;
    align-items: center;
    justify-content: Center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor:pointer;
    opacity:0.5;
    z-index:2;
 `
 const Wrapper = styled.div`
 height:100%;
 display:flex;
 transform: translateX(${props=>props.slideIndex * -100}vw);
 transition: all 1.5s ease;
 `
 const Slide = styled.div`
  display: flex;
  align-items: center;
  width:100vw;
  height:100vh;
  padding:20px 0;
 `
 const Image = styled.img`
 flex:1;
 height:85%;
//  border:2px solid red;
 
 `

 const ImgContainer = styled.div`
 flex:1;
 height:100%;
//  border:2px solid red;
 text-align:center;
 `
 const InfoContainer = styled.div`
 flex:1;
 padding:50px;
 `
 const Title = styled.h1`
font-size:70px;
 `
 const Description = styled.p`
margin:50px 0;
font-size:20px;
font-weight: 500;
letter-spacing:3px;
 `
 const Button = styled.button`
padding:10px;
font-size:20px;
background-color: transparent;
cursor:pointer;
 `




const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick =(direction)=>{
if(direction === 'left'){
setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2 )
}else{
  setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0 )
}
  }
  return (
    
    <Container>
     <Arrow direction='left' onClick={()=>handleClick('left')}>
     <ArrowLeftOutlined />  
     </Arrow>
     <Wrapper slideIndex={slideIndex}>
      <Slide style={{backgroundColor:"#f5fafd"}}>
      <ImgContainer>
       <Image src={SummerLady}/>
      </ImgContainer>
      <InfoContainer>
        <Title>SUMMER SALE</Title>
        <Description>DON'T COMPROMISE ON STYLE! GRT FLAT 30% OFF FOR NEW ARRIVALS.</Description>
        <Link to="/ProductList"><Button>SHOW NOW</Button></Link>
      </InfoContainer>
      </Slide>
      <Slide style={{backgroundColor:"#fcfied"}}>
      <ImgContainer>
       <Image src={red}/>
      </ImgContainer>
      <InfoContainer>
        <Title>WINTER SALE</Title>
        <Description>DON'T COMPROMISE ON STYLE! GRT FLAT 30% OFF FOR NEW ARRIVALS.</Description>
        <Link to="/ProductList"><Button>SHOW NOW</Button></Link>
      </InfoContainer>
      </Slide>
      <Slide style={{backgroundColor:"#fbf0f4"}}>
      <ImgContainer>
       <Image src={black}/>
      </ImgContainer>
      <InfoContainer>
        <Title>POPULAR SALE</Title>
        <Description>DON'T COMPROMISE ON STYLE! GRT FLAT 30% OFF FOR NEW ARRIVALS.</Description>
        <Link to="/ProductList"><Button>SHOW NOW</Button></Link>
      </InfoContainer>
      </Slide>
     </Wrapper>
     <Arrow direction='right' onClick={()=>handleClick('right')}>
     <ArrowRightOutlined />
     </Arrow>   
    </Container>
    
  )
}

export default Slider
