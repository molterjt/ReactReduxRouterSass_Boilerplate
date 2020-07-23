import React, {useRef} from 'react'
import '../App.scss';

export const EditTask = ({id, setEditing, editTask}) => {
  const btnRef = useRef(null);
  const inputRef = useRef(null);

  function handleFocus(){
    btnRef.current.focus()
  }
  return (
    <footer className='footer-block'>
        <button
          className="edit-hide"
          onClick={setEditing}
        >
          x
        </button>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!inputRef.current.value.trim()) return
          editTask(id, inputRef.current.value);
          inputRef.current.value = ''
        }}
      >
        <input 
          className="edit-input"
          placeholder={'Edit Entry'} 
          ref={inputRef} 
        />
        <button  
          ref={btnRef}
          className="edit-submit"
          type="submit"
          onFocus={handleFocus}
        >
          {'[√]'}
        </button>
      </form>
    </footer>
  )
}