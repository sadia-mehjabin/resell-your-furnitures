import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import { Children } from 'react';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
          {/* {Children} */}
      </RouterProvider>
    </div>
  );
}

export default App;
