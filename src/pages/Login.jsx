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
width:30%;
background: linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5)),transparent ;
${mobile({width:"75%"})}

`
const Title = styled.h1`
font-size:24px;
font-weight:300;
`
const Form = styled.form`
display:flex;
flex-direction:column;
`
const Input = styled.input`
flex:1;
min-width:40%;
margin:10px 0px ;
padding:10px;
font-size:18px;
`

const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color: teal;
color:white;
cursor:pointer;
margin :10px 0;
&:hover{background-color: rgb(3, 91, 91);
`
const Links = styled.a`
margin:10px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username" />
                <Input placeholder="password" type="password"/>
                <Link to="/Home">
                  <Button>LOGIN</Button>
                </Link>
                
                <Links>FORGOT PASSWORD?</Links>
                <Links><Link to="/Register">CREATE A NEW ACCOUNT</Link> </Links>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login