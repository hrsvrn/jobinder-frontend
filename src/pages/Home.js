import Nav from '../components/Nav';
import { useState } from 'react';
import AuthModal from '../components/AuthModal';
import bg from '../images/bg1.png';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const authToken = false;

    const handleClick = () => {
        console.log("button clicked");
        setShowModal(true);
    };

    return (
        <div>
            <img src='../images/bg1.png'/>
        <div className='overlay'>
            <div className="home" >
                
                <Nav minimal={false} authToken={authToken} />
                <h1>Swipe right</h1>
                <p>And get Jobs with Jobinderr</p>
                <button className='primary-button' onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>
                {showModal && (
                    <AuthModal setShowModal={setShowModal} />
                )}
            </div>
        </div>
        </div>
    );
};

export default Home;
