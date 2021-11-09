import React from 'react'
import './App.css';
import Home from './components/Home';
import { Provider } from "react-redux";
import store from './store'
function App() {
  return (
    <div className="App">
    <React.StrictMode>
    <Provider store={store}>
     <Home/>
     </Provider>
  </React.StrictMode>
    </div>
  );
}

export default App;
