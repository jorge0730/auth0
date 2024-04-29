import './App.css';
import LoginButton from './login';
import LogoutButton from './logout';
import Profile from './perfil';

function App() {
  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
      <Profile/>
    </div>
  );
}

export default App;
