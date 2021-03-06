import { useContext } from "react"
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

export default function Footer(props){
    const {cart} = useContext(UserContext)

    return(
        <HomeFooter>
            {(cart === null) ? 
                <EmptyCartTitle>Selecione seus itens</EmptyCartTitle>
            :
                <>
                    <CartData>
                        <TotalTitle>Total</TotalTitle>
                        <Total>R${cart.total}</Total>
                    </CartData>
                    <CartButtons>
                        <Button onClick={()=> props.route()}>{props.title}</Button>
                    </CartButtons>
                        
                </>
            }
            
        </HomeFooter>
    )
}

const HomeFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 120px;
    background:#e2dd7b;
`
const EmptyCartTitle = styled.label`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 15px;
    color: rgba(0, 0, 0, 0.28);
`
const CartData = styled.section`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 25px;
`
const TotalTitle = styled.label`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 15px;
    color: #135713;
    margin-bottom: 15px;
`
const Total = styled.label`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 24px;
    color: #135713;
`
const CartButtons = styled.section`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 30px;
    right: 20px;
`
const Button = styled.button`
    background: #135713;
    border-radius: 5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 12px;
    color: #FFFFFF;
    border: none;
    padding: 25px 15px;
    margin-bottom: 10px;
`