import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

export default function App() {
  const value = 0.5;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>

        <Slider aria-label="Volume" value={value} />

      </Stack>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
    </Box>
      </header>

    </div>
  );
}

