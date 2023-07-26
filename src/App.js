import React from 'react';
import Navbar from './Components/NewNavbar';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  const router= createBrowserRouter([{path:"/", element:<Navbar />}
  ]);

  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;