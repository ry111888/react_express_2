
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Chat from "./components/Chat";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignIn/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/signin' element={<SignIn/>}></Route>
            <Route path='/chat' element={<Chat/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
