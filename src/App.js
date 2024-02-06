import { useReducer } from 'react';
import initialState from './data/myData';
import { placesReducer } from './reducers/placesReducer';
import LocationList from './components/LocationList';
import './App.css';

function App() {
  const [ locations, dispatch ] = useReducer( placesReducer, initialState );

  return (
    <div className="App">
      <h1>Visit NYC</h1>
      <LocationList locations={locations} dispatch={dispatch} />
    </div>
  );
}

export default App;
