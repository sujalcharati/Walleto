// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const isAuthenticated = localStorage.getItem('token');
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;



import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token');
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to the login page with the current location in state
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If authenticated, render the children components
  return children;
};

export default ProtectedRoute;