import Header from './components/Header';
import './App.css';
import Main from './components/Main';

const user = {
  firstName: 'Damian',
  lastName: 'Wayne',
  age: 22,
  email: 'damianwayne22@gmail.com',
  description: 'test information' 
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main user={user}/>
    </div>
  );
}

export default App;
