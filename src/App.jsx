import { useEffect,useState } from 'react';

import './App.css'
import Box from './component/Box'

function App() {
  const [boxes, setBoxes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    generateBoxes();
  }, []);

  const generateBoxes = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange','pink'];
    const newBoxes = Array.from({ length: 10 }, () => ({
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setBoxes(newBoxes);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredBoxes = boxes.filter(box => box.color.toLowerCase().includes(searchTerm));

  return (
    <>
  <div className="app-container">
      <button onClick={generateBoxes} className="generate-button">Generate Boxes</button>
      <input
        type="text"
        placeholder="Search by color"
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="box-container">
        {filteredBoxes.map((box, index) => (
          <Box key={index} color={box.color} />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
