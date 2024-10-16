import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import {AuthContextProvider} from "./context/AuthContext";

function App() {


    return (
        <>
            <AuthContextProvider>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Login' element={<Login/>}/>
                    <Route path='/SignUp' element={<SignUp/>}/>

                </Routes>
            </AuthContextProvider>
        </>
    );
}

export default App;