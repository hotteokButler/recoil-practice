import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from './common/theme';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={LightTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </StrictMode>
);
