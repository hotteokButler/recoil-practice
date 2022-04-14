import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from './common/theme';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <BrowserRouter basename="/recoil-practice">
      <RecoilRoot>
        <ThemeProvider theme={LightTheme}>
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  </StrictMode>
);
