import React, {lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Loading } from './components/Loading.js';

const Home = lazy(() => import('./pages/Home.js'));
const MovieDetail = lazy(() => import('./pages/MovieDetail.js'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
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