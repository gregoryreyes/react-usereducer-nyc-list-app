import { useState } from "react";
import LocationItem from "./LocationItem";

export default function LocationList( {locations, dispatch} ){
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_LOCATION", payload: { title } });
    setTitle("");
  }

  return(
    <div>
      <h2>Places to See</h2>

      <form
        onSubmit={handleSubmit}
      >
        <input 
          type="text"
          value={title}
          onChange={ (e) => setTitle(e.target.value) }
          placeholder="Add a Location..."
        />
        <button type="submit">Add Location</button>
      </form>

      {locations.map( (location) => {
        return (
          <LocationItem key={location.id} location={location} dispatch={dispatch} />
        );
      } )}
    </div>
  )
}