import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App =()=> {
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* render karke hamesha home screen ko hi main screen manega */}
      <Route path="/onboarding" element={<Onboarding/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
        
     
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
