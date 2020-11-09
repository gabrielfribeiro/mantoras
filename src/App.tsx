import React, { StrictMode } from 'react';
import GlobalStyle from './assets/styles/global';
import { ToastContainer } from 'react-toastify';
import { Routes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';

const App: React.FC = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const db = firebase.firestore();
  //     const data = await db.collection('users').get();
  //     setUsers(data.docs.map((item: any) => item.data()));
  //   };
  //   fetchData();
  // }, []);

  return (
    <StrictMode>
      <BrowserRouter>
        <ToastContainer />
        <GlobalStyle />
        <Header />
        <Routes />
      </BrowserRouter>
    </StrictMode>
  );
};

export { App };
