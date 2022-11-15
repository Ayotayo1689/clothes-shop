import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`

    height: 60px;
   ${mobile({height:"50px"})}
`
const Wrapper = styled.div`
padding:10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({padding:"10px 0px"})}
`
const Left = styled.div`
flex:1;
display:flex;
align-items: center;
`
const Language = styled.span`
font-size:14px;
cursor:pointer;
${mobile({display:"none"})}
`
const SearchContainer = styled.div`
border: 1px solid rgb(195, 194, 194);
display:flex;
align-items: center;
margin-left:25px;
padding:5px;
`
const Input = styled.input`
border:none;
font-size:20px;
&:focus{
  outline: none;
}
 ${mobile({width:"50px"})}
`
const Logo = styled.h1`
font-weight:bold;
font-family: 'Lobster', cursive;
font-style: italic;
${mobile({fontSize:"24px"})}
`
const Center = styled.div`
flex:1;
text-align:Center;
`
const Right = styled.div`
flex:1;
display:flex;
align-items: center;
justify-content:flex-end;
${mobile({flex:2, justifyContent:"center"})}
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({fontSize:"12px", marginLeft:"10px"})}
`


const Navbar = () => {
  return (
   
     <Container> 
      <Wrapper>
         <Left>
          <Language>
            EN
          </Language>
          <SearchContainer>
          <Input type="text" className='input' placeholder="search"/>
          <Search />
          </SearchContainer>
         </Left>
         <Center><Link to="/Home" style={{textDecoration:"none", color:"black"}}><Logo>Dress {/* Up Dress Shop*/} </Logo></Link></Center>
         <Right>
          <MenuItem> <Link to='/Register' style={{textDecoration:"none", color:"black"}}>REGISTER</Link></MenuItem>
          <MenuItem><Link to='/' style={{textDecoration:"none", color:"black"}}>SIGN IN</Link></MenuItem>
          <MenuItem>
          <Link to="/Cart">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Link>
            
          </MenuItem>
         </Right>
      </Wrapper> 
     </Container>
  )
}

export default Navbar