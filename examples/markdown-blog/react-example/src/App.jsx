import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { _heller_base } from '@nickgdev/hellerui';
import { Home } from './pages/home';
import { MarkdownPage } from './pages/markdown';
import { JSXPage } from './pages/jsxpage';
import { FAQ } from './pages/faq';
import '@nickgdev/hellerui/lib/index.css';
import '@nickgdev/hellerui/lib/themes/dark.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="markdown" element={<MarkdownPage />} />
        <Route path="jsx-page" element={<JSXPage />} />
        <Route path="faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
