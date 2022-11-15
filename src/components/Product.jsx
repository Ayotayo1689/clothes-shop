import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Info = styled.div`
opacity:0;
 width:100%;
 height:100%;
 object-fit:cover;
 position:absolute;
 top:2;
 left:0;
 background-color:rgba(0,0,0,0.2);
 z-index:3;
 display:flex;
justify-content:center;
align-items:center;
transition: all 1s ease;
cursur:pointer;
`

const Container = styled.div`
flex:1;
width:20%;
margin:5px;
min-width:280px;
height:350px;
display:flex;
justify-content:center;
align-items:center;
position:relative;
&:hover ${Info}{
    opacity:1;
}
`
const Circle = styled.div`
width:200px;
height:200px;
border-radius:50%;
background-color:white;
position:absolute;
`
const Image = styled.img`
height:100%;
width:100%;
z-index:2;
// height:100%;
object-fit:cover;
`

const Title = styled.div`

`
const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
justify-content:center;
align-items:center;
margin:10px;
transition: all 0.5s ease;
&:hover {
    background-color:#e9f5f5;
    transform: scale(1.1);
}
`

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Icon>
            <ShoppingCartOutlined />
        </Icon>
        <Icon>
            <SearchOutlined />
        </Icon>
        <Icon>
            <Link to="/EachProduct"><FavoriteBorderOutlined /></Link>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product