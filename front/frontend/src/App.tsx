import './App.css';
import Header from './components/organisms/Header';
import Router from './Router';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <div style={{marginTop: 64}}>
        <Router/>
      </div>
    </div>
  );
}

export default App;
