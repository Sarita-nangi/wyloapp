// src/components/Post.js
import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post, onEdit }) => {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button onClick={() => onEdit(post.id)}>Edit</button>
    </div>
  );
};

export default Post;
