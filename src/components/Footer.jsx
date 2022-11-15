import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter, WhatsApp } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
display:flex;
${mobile({flexDirection:"column"})}

`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const Logo = styled.h1`
font-weight:bold;
font-family: 'Lobster', cursive;
font-style: italic;
`
const Description = styled.p`
margin: 20px 0;

`
const SocialContainer = styled.div`
display:flex;

`
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:10px;
`
const SocialIconIg = styled.div`
background-color: #f00241;
width:40px;
height:40px;
border-radius:50%;
color:white;
display:flex;
align-items:center;
justify-content:center;
margin-right:10px;
`
const Center = styled.div`
flex:1;
padding:20px;
 ${mobile({display:"none"})}

`
const Right = styled.div`
flex:1;
padding:20px;
display:flex;
flex-direction:column;
// align-items:center;
justify-content:center;
float:left;
// border:2px solid red;
${mobile({backgroundColor:"#fff8f8"})}

`
const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items: center;
`
const Payment = styled.img`
width:50%;
`
const Title = styled.h3`
margin-bottom:30px;
`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`
const ListItem = styled.li`
margin-bottom:10px;
width:50%;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Dress Up Dress Shop</Logo>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate sunt laudantium odit corrupti, iste ea ullam tempora! Eum, nisi quia!
            </Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>
                <SocialIconIg>
                    <Instagram />
                </SocialIconIg>
                <SocialIcon color="E60023">
                    <Pinterest /> 
                </SocialIcon>
                <SocialIcon style={{backgroundColor: "#4bf853"}}>
                    <WhatsApp />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms and conditions</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room  style={{marginRight: "10px"}}/>
                My house address
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: "10px"}}/>
                My phone number
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight: "10px"}}/>
                My email address
            </ContactItem>
            <Payment  src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer