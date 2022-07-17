import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Main from '../Components/Main/Main';
import Game from '../Components/Game/Game'
import { Routes, Route} from "react-router-dom";
import Sidebar from '../Components/Sidebar/Sidebar';
import './App.css'

function App(){
    return(
        <Router>
            <div className='container'>
                <Header menu={["На станцию", "Кресты здесь", "Макулатура здесь"]}/>
                </div>
                <div className='content'>
                    <Routes>
                        <Route path={encodeURI("/Макулатура здесь")} element={<Main/>} />
                        <Route path={encodeURI("/Кресты здесь")} element={<Game/>} />
                        <Route path={encodeURI("/На станцию")} element={<Sidebar/>} />
                        <Route path={encodeURI("/")} element={<Sidebar/>} />
                    </Routes>

                </div>
        </Router>
    );
}

export default App;