import { Route, Routes } from "react-router-dom";
import { AuthProvider } from './components/AuthProvider';
import Navbar from "./components/Navbar";
import { Register } from "./components/pages/Register";
import { Login } from "./components/pages/Login";
import { RequireAuth } from "./components/RequireAuth";
import { AddSkills } from "./components/pages/AddSkills";
import { Home } from "./components/pages/Home";

function App() {

    return (
        <AuthProvider>
            <Navbar />
            <Routes>
                <Route path='/register' element={ <Register /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/' element={<RequireAuth><Home /></RequireAuth>} />
                <Route path='/add' element={<RequireAuth><AddSkills /></RequireAuth>} />
            </Routes>
        </AuthProvider>
    );
}

export default App;
