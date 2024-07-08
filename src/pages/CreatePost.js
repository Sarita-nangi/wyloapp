// src/pages/CreatePost.js
// src/pages/CreatePost.js
import React from 'react';
import PostForm from '../components/PostForm';
import { useNavigate, useParams } from 'react-router-dom';

const CreatePost = ({ posts, setPosts }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const postToEdit = posts.find(post => post.id === id);

  const handleSubmit = (post) => {
    if (postToEdit) {
      const updatedPosts = posts.map(p => p.id === postToEdit.id ? { ...p, ...post } : p);
      setPosts(updatedPosts);
    } else {
      setPosts([...posts, { ...post, id: Date.now().toString() }]);
    }
    navigate('/');
  };

  return <PostForm onSubmit={handleSubmit} postToEdit={postToEdit} />;
};

export default CreatePost;

