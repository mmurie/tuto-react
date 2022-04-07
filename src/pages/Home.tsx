import React, { useContext, useState } from 'react';
import Countries from '../components/Countries';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { UserContext } from '../UserContext';

const Home = () => {
    const { user, setUser } = useContext(UserContext);
    const [userName, setUserName] = useState("");

    return (
        <div>
            <Logo></Logo>
            <Navigation></Navigation>
            <h1>ACCUEIL</h1>


            {user ? (
                <div>
                    <p>Bonjour {user.username} :D</p>
                    <button
                        onClick={() => {
                            // call logout
                            if (setUser !== undefined)
                                setUser(null);
                        }}
                    >
                        Se déconnecter
                    </button>
                    <Countries></Countries>
                </div>
            ) : (
                <div>
                    <p> Veuillez renseigner votre pseudo s'il vous plaît !</p>
                    <div className='login-form'>
                        <label htmlFor="username">Pseudo : </label>
                        <input type="text" id="username" onChange={(e) => {
                            setUserName((e.target.value))
                        }} />
                    </div>
                    <button
                        onClick={async () => {
                            const user = {
                                username: userName,
                            };
                            if (setUser !== undefined)
                                setUser(user);
                        }}
                    >
                        Se connecter
                    </button>
                </div>
            )}


        </div>
    );
};

export default Home;