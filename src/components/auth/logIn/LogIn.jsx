import {
  AuthContainer,
  AuthLeftSection,
  AuthWelcomeText,
  AuthText,
  GoodsImage,
  Icon,
  AuthRightFormSection,
  AuthBox,
  AuthTypeText,
  AuthInput,
  AuthButton,
  QuestionDiv,
  Question,
  BoldBlackPath,
} from "../../../global.styled";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { SiCoffeescript } from "react-icons/si";
const LogIn = () => {
  return (
    <AuthContainer>
      {/* Left Section */}
      <AuthLeftSection>
        {/* <SiCoffeescript color="#fff" /> */}
        <Icon>Ahmed_Store Icon</Icon>
        <AuthWelcomeText>Welcome Back!</AuthWelcomeText>
        <AuthText>Login to your account and start your shopping</AuthText>
        <GoodsImage source="images/goods.png"></GoodsImage>
      </AuthLeftSection>

      {/* Right Section */}
      <AuthRightFormSection>
        <AuthBox>
          <AuthTypeText>LogIn</AuthTypeText>
          <AuthInput Type="email" Name="email" PlaceHolder="Write Email" />
          <AuthInput
            Type="password"
            Name="password"
            PlaceHolder="Write Password"
          />
          <AuthButton>login</AuthButton>
        </AuthBox>
        <QuestionDiv>
          <Question>
            Don't have account?
            <BoldBlackPath href="#">
              <Link
                to="/signUp"
                style={{
                  textDecoration: "none",
                  color: "#3b3b3b",
                  fontWeight: "bold",
                }}
              >
                Sgin up
              </Link>
            </BoldBlackPath>
          </Question>
        </QuestionDiv>
      </AuthRightFormSection>
    </AuthContainer>
  );
};

export default LogIn;
