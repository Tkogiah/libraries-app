import './App.css';
import { Routes, Route, Link} from "react-router-dom";
import Typography from '@mui/material/Typography';
import ButtonAppBar from './AppBar';

function Home() {
  return (
    <>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={
          <Typography variant="h2" gutterBottom component="div">
            Home
          </Typography>
        }/>

        <Route path="about" element={
          <Typography variant="h2" gutterBottom component="div">
            About
          </Typography>
        } />
      </Routes>      
    </div>
  );
}
