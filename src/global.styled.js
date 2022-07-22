import styled from "styled-components";
// Auth => login and signUp
export const AuthContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: row;
`
// Auth left Section
export const AuthLeftSection = styled.div`
  width: 30%;
  height: 100vh;
  background-color:#081833;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 125px;
`
export const AuthWelcomeText = styled.h5`
  color: #f3f3f3;
  font-size: 30px;
  font-weight: bold;
  margin-bottom:0;
  margin-top:10px;
`

export const AuthText = styled.p`
  margin-bottom: 70px;
  color: #f3f3f3;
  width:80%;
  font-size: 18px;
  opacity: 0.6
  `
export const GoodsImage = styled.img.attrs((props) => ({
src: props.source || "images/goods.png",

}))`
max-width: 80%;`;

export const Icon = styled.h6`
display:inline;
color:#fff;
font-size:20px;
margin-bottom:10px;
`;

// Auth Right Section
export const AuthRightFormSection = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  flex-wrap: wrap;
  height: 100%;
  background-color: #f3f3f3;
  `

  export const AuthBox = styled.div`
  width:65%;
  display: flex;
  flex-direction: column;
  
  `
  export const AuthTypeText = styled.h3`
  text-transform: uppercase;
  font-size: 24px;
  border-left: 7px solid #081833;
  margin-top:10px;
  margin-bottom:10px;
  color:#081833;

  
  `
  export const AuthInput = styled.input.attrs((props) => ({
    placeholder: props.PlaceHolder,
    name: props.Name,
    type: props.Type,
  }))`
  height: 50px;
  background-color: #ffffff;
  color: #081833;
  outline: none;
  border:none;
  margin:5px;
  `;

  export const AuthButton = styled.button`
  background-color: transparent;
  margin-top: 5px;
  margin-bottom: 5px;
  border: none;
  color: #081833;
  width: 20%;
  font-size: 16px;
  cursor: pointer;
  text-transform: uppercase;
  margin-left: 450px;
  font-weight: 500;
  `
//  Question Div

export const QuestionDiv = styled.div`
padding-top: 50px;
padding-bottom: 20px;
`;
export const Question = styled.a`
  &:hover {
    color: #081833;
  }
`;


export const BoldBlackPath = styled.a`
color: #081833;
font-weight: 500;
text-decoration: none;
`;
