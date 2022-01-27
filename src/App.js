import logo from './logo.svg';
import './App.css';
import LocalStoragehook from './LocalStoragehook';


function App() {
  const [name,setName]=LocalStoragehook('name','')
  return (
    <input 

    type="text"
    value={name}
    onChange={e => setName(e.target.value)}

    
    
    />
  );
}

export default App;
