
import './App.css';
import Blog from './Blog';
import Home from './Home';
import { BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {

  return (
     <BrowserRouter>
       <Routes>

         <Route path="/"  element={<Home/>}/>
           

         <Route  path="/blogs" element={<Blog/>} />
          

         </Routes>           
    </BrowserRouter>
  );
}

export default App;
