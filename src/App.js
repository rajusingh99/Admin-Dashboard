import './App.css';
import {Box} from '@mui/material'
import Admin from './Pages/Admin';
import TopNav from './Components/Common/TopNav';

function App() {
  return (
    <Box className="App">
       <TopNav/>
       <Admin/>
    </Box>
  );
}

export default App;
