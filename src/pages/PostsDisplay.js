// src/pages/PostsDisplay.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PostList from '../components/PostList';

const PostsDisplay = ({ posts, setPosts }) => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
      <PostList posts={posts} onEdit={handleEdit} />
      <Link to="/create">
        <button>Create Post</button>
      </Link>
    </div>
  );
};

export default PostsDisplay;
