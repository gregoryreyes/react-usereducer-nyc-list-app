import { useState } from 'react';

export default function LocationItem( {location, dispatch} ){
  const { title, completed } = location;
  const [showEdit, setShowEdit] = useState( false );
  const [newTitle, setNewTitle] = useState( title );

  const handleSave = () => {
    dispatch({ type: "EDIT_LOCATION", payload: { id: location.id, title: newTitle } });
    setShowEdit(false);
  }

  return(
    <div className='locationItemWrap'>
      {showEdit ? (
        <div className="locWrap">
          <input
            value={newTitle}
            onChange={ (e) => setNewTitle(e.target.value) }
          />
          <button onClick={handleSave} >Save</button>
        </div>
      ) : (
        <div className="locWrap">
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={() =>
              dispatch( {type: "TOGGLE_COMPLETED", payload: { id: location.id } })
            }
          />
          <h3>{title}</h3>
          <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
          <button onClick={()=> 
            dispatch({type: "DELETE_LOCATION", payload: { id: location.id } })
          }>Delete</button>
        </div>
      )}
      <br />
    </div>
  )
}