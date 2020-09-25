import React, {useEffect, useState, useRef} from 'react';

function App() {
  const [name, setName] = useState('')
  const prevName = useRef('')

  // function focus() {
  //   console.log(inputRef.current.focus)
  //   inputRef.current.value = 'Some Value'
  // }
  useEffect(() => {
    prevName.current = name
  }, [name])


  return (
    <div>
      <input value={name} onChange={(e)=> setName(e.target.value)}/>
  <div>My name is {name}, but it used to be {prevName.current}</div>
      {/* <div>I rendered {renderCount.current}</div> */}
      {/* <button onClick={focus}>Focus</button> */}
    </div>
  );
}

export default App;
