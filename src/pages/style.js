import { Link } from "react-router-dom";
import styled from "styled-components";
import Select from 'react-select'

const Container = styled.div`
  background: ${(props) => props.background || 'initial'};

  width: 100%;
  min-height: ${(props) => props.minHeight || 'initial'};

  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || 'initial'};
  align-items: center;
  align-self: ${(props) => props.alignSelf || 'initial'};
  
  margin: ${(props) => props.margin || '0px'};
  padding: ${(props) => props.padding || '0px'};
  border-radius: ${(props) => props.borderRadius || '0px'};
  
`;
const SelectedStyled = styled(Select)`
  width: 150%;
  font-family: 'Lexend Deca', sans-serif;
  color: #000;
  background: #FFFFFF;
  
  /* padding: 21px; */
  border: 1px solid rgba(120, 177, 89, 0.25);
  border-radius: 12px;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  box-sizing: border-box;
`
const RankBox = styled.div`
align-self: left ;
width: 40%;
margin: 20px 0px; 
caption {
  font-weight: bold;
  font-size: 24px;
  text-align: left;
  color: #333;
  margin-bottom: 16px;
}
thead {
  background-color: #333;
  color: white;
  
}
tbody tr:nth-child(odd) {
  background-color: #fff;
}

tbody tr:nth-child(even) {
  background-color: #eee;
}
table, th, td {
  border: 1px solid rgba(120, 177, 89, 0.25);
  padding: 5px;
  /* border-collapse: collapse; */
  th{
    width: 100px;
  }
  td {
  text-align: center;
}
}
`;
const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'initial'};
  justify-content: ${(props) => props.justifyContent || 'initial'};
  align-items: ${(props) => props.alignItems || 'initial'};
  align-self: ${(props) => props.alignSelf || 'initial'};
  gap: ${(props) => props.gap || '0px'};
  width: ${(props) => props.width || 'initial'};
  margin: ${(props) => props.margin || 'initial'};

  @media (max-width: 800px) {
    flex-direction: column;
} 

`;

const StyledLink = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: ${(props) => props.active ? '#5D9040' : '#9C9C9C'};
`

const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: 'Inspiration', cursive;
    font-style: normal;
    font-size: 100px;
    line-height: 60px;

  color: #135713;

  margin-top: 16px;
  margin-bottom: 50px;
`;

const DeleteButton = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  width: 100%;
  max-width: 130px;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  padding: 17px;
  margin-left: auto;
  background: #FFF;
  border-radius: 0px 12px 12px 0px;
`;

const Span = styled.span`
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 'initial'};
  font-size: 14px;
  line-height: 18px;
  text-align: ${(props) => props.align || "initial"};

  color: ${(props) => props.color || "initial"};
`;

const UrlLink = styled.a` 
  font-style: normal;
  width: 25%;
  font-weight: ${(props) => props.fontWeight || 'initial'};
  font-size: 15px;
  line-height: 18px;
  text-align: ${(props) => props.align || "initial"};

  color: ${(props) => props.color || "initial"};
`;

const Url = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border: 1px solid rgba(120, 177, 89, 0.25);
  border-radius: 12px;
  padding-left: 20px;
`;

export {
  SelectedStyled,
  Container,
  Flex,
  StyledLink,
  Span,
  Title,
  DeleteButton,
  Url,
  UrlLink,
  RankBox
};
