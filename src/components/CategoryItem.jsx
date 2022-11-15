import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
flex:1;
margin:5px;
height:70vh;
position:relative;
// display:flex;
// align-items:center;
// justify-content:center;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
${mobile({height:"20vh"})}

`
const Info = styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`
const InfoWrapper = styled.div`
background: linear-gradient(rgba(126, 126, 126, 0.5),rgb(255, 255, 255,0.5)),transparent ;
// width:85%;
// height:30%;
padding:1em 0px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Title = styled.h1`
font-color:white;
margin-bottom:20px;
`
const Button = styled.button`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
font-weight:600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <InfoWrapper>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
        </InfoWrapper>
      </Info>
    </Container>
  )
}

export default CategoryItem