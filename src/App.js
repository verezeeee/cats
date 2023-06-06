import './App.css';
import Button from './components/button';

function App() {
  return (
    <div style={{
      background:'#520c1e',
      height: '100vh'
    }} className="App">
      <>
        <h1 style={{
          margin: 0,
          padding: 0,

        }}>Catos</h1>
        <br/>
        <Button/>
        <br/>
        <br/>
        <br/>
        <div id='gato'>
          <img style={{
            width: 500,
            height: 500,
            objectFit:'cover'
          }} src='' id='img' alt=''></img>
        </div>
      </>
    </div>
  );
}

export default App;
