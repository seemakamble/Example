import './App.css';
 import {Form} from './components/practice/Form';
 import Compo1 from './components/practice/Compo1';
 import Compo2 from './components/practice/Compo2';
 import Compo3 from './components/practice/Compo3';
 import Mapcount from './components/practice/Mapcount';
 import UserList from './components/contact/UserList'
  //  import AddForm from './components/practice/AddForm'
  import { Route,Routes,Link} from 'react-router-dom';
  import ContactList from './components/contact/ContactList';
 import Button from './components/practice/Count';
import Count from './components/practice/Count';
import Exam1 from './components/Exam1';
import CakeShop from './components/redux/CakeShop';
import ReduxExample from './components/redux/ReduxExample';


function App() {
  return (
    <div className="App">
      {/* <ContactList /> */}
       <Compo1 /> 
      {/* <UserList />  */}
        {/* <AddForm />  */}
      
      {/* <Exam1 />
     */}
   <ReduxExample />
     
     <Link to='form'>go to form</Link> 
     <Routes>
      <Route path='form' element={<Form/>}>
      <Route path='compo1' element={<Compo1/>}>
       
        <Route path='compo2' element={<Compo2/>}>
          <Route path='compo3' element={<Compo3/>}/>
          </Route> 
          </Route>
        </Route>

      </Routes> 
      
       
      
    </div>
  );
}

export default App;
