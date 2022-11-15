import { Link } from "react-router-dom"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
width:100vw;
height:100vh;
 background: linear-gradient(rgba(128, 128, 128, 0.5),rgba(128, 128, 128, 0.5)),url("https://img.freepik.com/free-photo/young-beautiful-woman-casual-outfit-isolated-studio_1303-20526.jpg?w=740&t=st=1666173352~exp=1666173952~hmac=384ec3bae7fe2df1b556b6dd8aa17ba2081c0669f0a49dba196d92ed6e02c747");
background-size: cover;
// background-position: center;
display:flex;
justify-content:center;
align-items:center;
${mobile({backgroundPosition:"center"})}
`
const Wrapper = styled.div`
padding:20px;
width:40%;
background: linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5)),transparent ;
${mobile({width:"75%"})}
`
const Title = styled.h1`
font-size:24px;
font-weight:300;
`
const Form = styled.form`
display:flex;
flex-wrap:wrap;
`
const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 30px 0 0 ;
padding:10px;
font-size:18px;
`
const Agreement = styled.span`
font-size:12px;
margin:20px 0;
`
const Button = styled.button`
width:100%;
border:none;
padding:15px 20px;
background-color: teal;
color:white;
cursor:pointer;
margin :10px 0;
&:hover{background-color: rgb(3, 91, 91);
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First name" />
                <Input placeholder="Last name" />
                <Input placeholder="Username" />
                <Input placeholder="email" />
                <Input placeholder="password" type="password" />
                <Input placeholder="Confirm password" type="password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
               <Link to="/Home">
                <Button>CREATE</Button>
                </Link> 
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register