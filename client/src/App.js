import axios from 'axios'
import {Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CreateProductPage from './pages/adminPage/CreateProductPage'

function App() {
 
  return (
    <div className="App">
        <Header/>
        
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/admin/createproduct" element={<CreateProductPage/>}/>
          </Routes>
        
          <img src="/logo192.png"/>

        </div>
    </div>
  );
}

export default App;
