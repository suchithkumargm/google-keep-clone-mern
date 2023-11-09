import './css/App.css';
import { Home } from './pages/Homepage/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from './components/authentication/Login';
import { Register } from './components/authentication/Register';
import { Notes } from './components/Notes/Notes';
import { Navbar } from './components/Navbar/Navbar';
import { Edit } from './components/EditPage/Edit';
import { Sidebar } from './components/Sidebar/Sidebar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <hr/>
      <main>
        <Sidebar/>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/notes' element={<Notes />}></Route>
          <Route path='/edit/:id' element={<Edit />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
