import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={divStyle}>
      <button style={buttonStyle} onClick={() => setIsOpen(true)}>Open Popup</button>

      {isOpen && (
        <div style={overlayStyle}>
          <div style={popupStyle}>
            <h2>Hello!</h2>
            <p>This is a popup window.</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

const divStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const buttonStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px',
    padding: '3px',

    cursor: 'pointer',

    border: 'solid 1px',
    borderRadius: '30px',
};

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const popupStyle = {
  background: '#fff',
  padding: '20px',
  borderRadius: '8px',
  minWidth: '300px',
};

export default App;