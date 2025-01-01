import React from 'react';

const Popover = ({ onClose }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '60px',
        left: '20px',
        padding: '20px',
        background: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        zIndex: 1000,
      }}
    >
      <h3>Add Expense</h3>
      <form>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Amount:</label>
          <input type="number" placeholder="Enter amount" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
          <input type="text" placeholder="Enter description" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type="submit" style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Save
          </button>
          <button type="button" onClick={onClose} style={{ padding: '10px 20px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default Popover;
