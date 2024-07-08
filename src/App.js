// src/App.js
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsDisplay from './pages/PostsDisplay';
import CreatePost from './pages/CreatePost';
import './styles.css';

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsDisplay posts={posts} setPosts={setPosts} />} />
        <Route path="/create" element={<CreatePost posts={posts} setPosts={setPosts} />} />
        <Route path="/edit/:id" element={<CreatePost posts={posts} setPosts={setPosts} />} />
      </Routes>
    </Router>
  );
}

export default App;


