
import logo1 from '../images/Jobinderr-3-removebg-preview.png'

const Nav = ({minimal,authToken})=> {
  return (
    <nav>
    <div className="logo-container" >
        <img className="logo" src={minimal ? '' : logo1}></img>
      
    </div>
    {!authToken && <button className='nav-button'> Log-In
       
   </button>}
    </nav>

  )
}

export default Nav
