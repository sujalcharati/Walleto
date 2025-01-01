// import React, { useState } from 'react';

// export const AddExpense = ({ togglePopover }) => {
//   const [showPopover, setShowPopover] =useState(false);

//   React.useEffect(() => {
//     if (togglePopover) {
//       togglePopover.current = () => setShowPopover(!showPopover);
//     }
//   }, [togglePopover]);

//   return (
//     <div>      
//       {showPopover && (
//         <div className="popover">
//           <h3>Popover Title</h3>
//           <p>Here you can display many things:</p>
//           <ul>
//             <li>Item 1</li>
//             <li>Item 2</li>
//             <li>Item 3</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddExpense;
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
                <div>
                    <label>Amount:</label>
                    <input type="number" placeholder="Enter amount" />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" placeholder="Enter description" />
                </div>
                <button type="submit">Save</button>
                <button type="button" onClick={onClose}>
                    Close
                </button>
            </form>
        </div>
    );
};

export default Popover;
