import React, { useState } from 'react';
import './App.css';

function App() {

  const [txt, setTxt] = useState('')

  const [txtList, setTxtList] = useState<any>([])


  function edit(index: Number) {
    const editTodo = prompt('Enter Todo you want to Edit')

    txtList.splice(index, 1, editTodo)
    setTxtList([...txtList]);
  }


  function del(index: Number) {

    txtList.splice(index, 1)
    setTxtList([...txtList]);

  }

  return (
    // <div className='div'>

    //   <input type="text"

    //     placeholder='Enter Todo'
    //     value={txt}
    //     onChange={(e) => setTxt(e.target.value)}
    //   />

    //   <button onClick={() => {

    //     txtList.push(txt)
    //     setTxt('')
    //     setTxtList([...txtList]);


    //   }}>Add</button>


    //   <button onClick={() => {
    //     setTxtList([])
    //   }}>Delete</button>


    //   <ul>

    //     {txtList.map((x: any, i: any) => {
    //       return <li key={i}>{x}

    //         <button onClick={() => edit(i)}>Edit</button>

    //         <button onClick={() => del(i)}>Delete</button>
    //       </li>

    //     })}

    //   </ul>

    // </div>

    <div className="todo-container">
      <input
        type="text"
        placeholder="Enter Todo"
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
        className="todo-input"
      />
      <button
        onClick={() => {

          if (txt.trim() !== '') {
            txtList.push(txt);
            setTxt('');
            setTxtList([...txtList]);
          }
        }}
        className="todo-button"
      >
        Add
      </button>
      <button
        onClick={() => {
          setTxtList([]);
        }}
        className="todo-button delete-all"
      >
        Delete
      </button>
      <ul className="todo-list">
        {txtList.map((x:any, i:any) => (
          <li key={i} className="todo-item">
            {x}
            <div>
            <button onClick={() => edit(i)} className="todo-button edit">
              Edit
            </button>
            <button onClick={() => del(i)} className="todo-button delete">
              Delete
            </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
