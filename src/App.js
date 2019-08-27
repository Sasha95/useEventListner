import React, {useState, useCallback} from 'react';
import {useEventListener} from "./UseEventListner";

function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handler = useCallback(
    ({ clientX, clientY }) => {
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  useEventListener('mousemove', handler);

  return (
    <h1>
      Position:  ({coords.x}, {coords.y})
    </h1>
  );
}

export default App;
