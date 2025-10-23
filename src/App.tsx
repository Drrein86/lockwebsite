import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../Layout.jsx';

// Import pages
import Home from '../pages/home';
import About from '../pages/About';
import Admin from '../pages/Admin';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Map from '../pages/Map';
import Products from '../pages/Products';
import Services from '../pages/Services';
import RobotsPage from '../pages/RobotsPage';
import SitemapXML from '../pages/SitemapXML';
import UserManagementPage from '../pages/UserManagementPage';

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/map" element={<Map />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/robots.txt" element={<RobotsPage />} />
          <Route path="/sitemap.xml" element={<SitemapXML />} />
          <Route path="/user-management" element={<UserManagementPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

