import './styles/App.css';
import Header from './Header';
import Home from './Home';
import Service from './Service';
import Register from './Register';
import RegisterConfirm from './RegisterConfirm';
import NewService from './NewService';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import DeleteInstitution from './DeleteInstitution';
import NewInstitution from './NewInstitution';
import Institution from './Institution';
import Appointments from './Appointments';
import Services from './Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/service' element={<Service/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/register-confirm' element={<RegisterConfirm/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/delete-institution' element={<DeleteInstitution/>}/>
          <Route path='/new-institution' element={<NewInstitution/>}/>
          <Route path='/new-service' element={<NewService/>}/>
          <Route path='/appointments' element={<Appointments/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/institution' element={<Institution/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
