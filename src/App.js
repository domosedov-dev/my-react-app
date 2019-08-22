import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
// import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Sidebar/>
            <main className="App__main">
                {/*{<Profile/>}*/}
                <Dialogs/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
