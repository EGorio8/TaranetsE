import Header from '../Components/Header/Header';
import Main from '../Components/Main/Main';
import Game from '../Components/Game/Game'
import { Routes, Route} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

import './App.css'


function App(){
    return(
        <Router>
            <div className='container'>
                <Header menu={["На станцию", "Игра не ждёт", "Макулатурка для мусольки"]}/>
                <div className='content'>
                    <Routes>
                        <Route path={encodeURI("/Макулатурка для мусольки")} element={<Main/>} />
                        <Route path={encodeURI("/Игра не ждёт")} element={<Game/>} />
                        <Route path={encodeURI("/На станцию")} element/>
                    </Routes>
                </div>
            
            </div>
        </Router>
    );
}

export default App;