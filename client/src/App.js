import axios from 'axios'
import {Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CreateProductPage from './pages/adminPage/CreateProductPage'

function App() {
 
  return (
    <div className="App container">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/admin/createproduct" element={<CreateProductPage/>}/>
          
        </Routes>
    </div>
  );
}

export default App;
