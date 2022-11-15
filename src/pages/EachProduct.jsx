import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'
import '../styles/eachproduct.css'

const EachProduct = () => {
    const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
    width:50%;
    margin: 30px 0px;
    ${mobile({width:"100%"})}
    `
    const Filter = styled.div`
    display:flex;
    align-items:center;
    `

    const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
    `
    const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=>props.color};
    margin:0px 5px;
    cursor:pointer;
    `
    const FilterSize = styled.select`
    margin-left:10px;
    padding:5px;
    border:2px solid teal;
    // &:hover{
    //     background-color:teal;
    //     color:white;
    // }
    `
    const FilterSizeOption = styled.option`
    &:hover{
        background-color:teal;
        color:white;
    }
    `

    const AddContainer = styled.div`
    display:flex;
    align-items:center;
    width:50%;
    justify-content:space-between;
    ${mobile({width:"100%"})}
    `
    const AmountContainer = styled.div`
    align-items:center;
    justify-content:space-between;
    display:flex;
    font-weight:700;
    width:30%;
    `
     const Amount = styled.span`
   padding:10px;
    border-radius:10px;
    border:1px solid teal;
    margin:5px;
    `
     const Button = styled.button`
    padding:15px;
    border:2px solid teal;
    font-weight:600;
    background-color:white;
    cursor:pointer;
    &:hover{
        background-color:teal;
        color:white;
    }
    `
  return (
    <div className='container'>
        <Navbar/>
        <Announcement />
        <div className="wrapper">
            <div className="imgcontainer">
                <img src="https://img.freepik.com/free-psd/white-t-shirt-mockup_125540-452.jpg?w=740&t=st=1666128723~exp=1666129323~hmac=cbe747074c59e96e85722e4677ad494d6da13e09e819d51648ee4b642ba69fb8" alt="" className="image" />
            </div>
            <div className="infocontainer">
                <h1 className="title">
                    white shirt                </h1>
                <p className="desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque animi perferendis eum quae ipsa, nihil adipisci delectus at accusantium, quos nostrum aut vitae odit maxime quas beatae consequatur, voluptas nisi!
                </p>
                <span className="price">$ 20</span>
               <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                </Filter>
               </FilterContainer>
               <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>Add To Cart</Button>
               </AddContainer>
            </div>
        </div>
        <Newsletter />
        <Footer />
        
    </div>
  )
}

export default EachProduct