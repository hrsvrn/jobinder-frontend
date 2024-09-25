import Nav from '../components/Nav';
import { useState } from 'react';
import AuthModal from '../components/AuthModal';
import img from '../images/bg2.png';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true);
    const authToken = false;

    const handleClick = () => {
        console.log("button clicked");
        setShowModal(true);
    };

    return (
        <div 
            className="home-container" 
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh',
                filter: 'brightness(0.7)', // Lower the brightness to make the image darker
                position: 'relative'
            }}
        >
            {/* Overlay for additional effect */}
            <div className='dark-overlay' style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark transparent overlay
            }}></div>

            <div className='overlay'>
                <div className="home" style={{ position: 'relative', zIndex: 1 }}>
                    <Nav minimal={false}
                        authToken={authToken}
                        setShowModal={setShowModal}
                        setIsSignUp={setIsSignUp}
                    />
                    <h1 className="fade-in-text">Swipe right</h1>
                    <p className="fade-in-text">And get Jobs with Jobinderr</p>
                    <button className='primary-button' onClick={handleClick}>
                        {authToken ? 'Signout' : 'Create Account'}
                    </button>
                    {showModal && (
                        <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
