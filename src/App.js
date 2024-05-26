import './App.css';
import { Theme } from './styles/Theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <MainPage/>
    </ThemeProvider>
  );
}

export default App;
