import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigation from './components/Navbar/Navbar'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <>
      <Navigation />
      <AppRoutes />
    </>
  );
}

export default App;
