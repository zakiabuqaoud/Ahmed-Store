import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./components/auth/logIn/LogIn.jsx";
import SignUp from "./components/auth/signUp/SignUp.jsx";
function App() {
  return (
      <BrowserRouter>
       <Routes>
        <Route path="/logIn" element={<LogIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
       </Routes>
      </BrowserRouter>
  );
}

export default App;
