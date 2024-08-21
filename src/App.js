import React, {lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Loading } from './compenents/Loading';
import { BASE_NAME } from './constants.js';

const Home = lazy(() => import('./pages/Home.js'));
const MovieDetail = lazy(() => import('./pages/MovieDetail.js'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  console.log("working");
  return (
    <Router basename={BASE_NAME}>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </Router>
  );
}

export default App;