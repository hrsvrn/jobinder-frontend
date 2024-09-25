
import logo1 from '../images/Jobinderr-3-removebg-preview.png'

const Nav = ({minimal,authToken,setShowModal,showModal,setIsSignUp})=> {
    const handleClick=()=>{
        setShowModal(true)
        setIsSignUp(false)//bec we are clicking on logged in so we will make it false
        
    }
  return (
    <nav>
    <div className="logo-container" >
        <img className="logo" src={minimal ? '' : logo1}></img>
      
    </div>
    {!authToken && <button className='nav-button' onClick={handleClick} disabled='{showModal}'> Log-In
       
   </button>}
    </nav>

  )
}

export default Nav
