import Footer from 'components/Footer';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import Sobre from 'pages/Sobre';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Cardapio = lazy(() => import('pages/Cardapio'));

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Suspense fallback={<p>Carregando...</p>}>
          <Menu />

          <Routes>
            <Route path='/' element={<PaginaPadrao />}>
              <Route index element={<Inicio />} />
              <Route path='cardapio' element={<Cardapio />} />
              <Route path='sobre' element={<Sobre />} />
            </Route>

            <Route path='prato/:id' element={<Prato />} />

            <Route path='*' element={<NotFound />} />
          </Routes>

          <Footer />
        </Suspense>
      </Router>
    </main>
  );
}
