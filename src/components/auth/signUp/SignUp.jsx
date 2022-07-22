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
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <AuthContainer>
      {/* Left Section  */}
      <AuthLeftSection>
        <Icon>Ahmed_Store Icon</Icon>
        <AuthWelcomeText>Get Started</AuthWelcomeText>
        <AuthText>Create a new account and start shopping NOW!</AuthText>
        <GoodsImage source="images/goods.png"></GoodsImage>
      </AuthLeftSection>

      {/* Right Section */}
      <AuthRightFormSection>
        <AuthBox>
          <AuthTypeText>Sign Up</AuthTypeText>
          <AuthInput Type="email" Name="email" PlaceHolder="Write Email" />
          <AuthInput
            Type="password"
            Name="password"
            PlaceHolder="Write Password"
          />
          <AuthInput
            Type="password"
            Name="passwordConfirmatoin"
            PlaceHolder="Rewrite Password"
          />
          <AuthButton>sign up</AuthButton>
        </AuthBox>
        <QuestionDiv>
          <Question>
            Already have an account?
            <BoldBlackPath href="#">
              <Link
                to="/logIn"
                style={{
                  textDecoration: "none",
                  color: "#3b3b3b",
                  fontWeight: "bold",
                }}
              >
                LogIn
              </Link>
            </BoldBlackPath>
          </Question>
        </QuestionDiv>
      </AuthRightFormSection>
    </AuthContainer>
  );
};

export default SignUp;
