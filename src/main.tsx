import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ConfigProvider } from 'antd';

const theme = {
  token: {
    colorPrimary: '#1f1f1f', // Ana renk
    colorSecondary: '#4a4a4a', // İkincil renk
    colorText: 'white', // Yazı rengi
    colorBackground: '#2f2f2f' // Arka plan rengi
  },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
