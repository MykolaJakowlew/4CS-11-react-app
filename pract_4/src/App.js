import './App.css';
import { Login } from './components/login.component/login.component.js';
import { MainComponent } from './components/main.component/main.component.js';
import { NotFoundPageComponent } from './components/notFound/notFoundPage.component.js';
import { Registration } from './components/registration.component/registration.component.js';
import { 
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={MainComponent} />
        <Route path='/login' Component={Login} />
        <Route path='/registration' Component={Registration} />
        <Route path='/*' Component={NotFoundPageComponent} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
