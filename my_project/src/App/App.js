import Icon from '../Icon/Icon';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import React from 'react';

import './App.css'

function App(){
    return(
        <div className='container'>
            <Icon/>
            <Header/>
            <Main/>
            <Sidebar/>
            <Footer/>
            
        </div>
    );
}

export default App;