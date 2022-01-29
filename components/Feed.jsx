import { useState } from 'react';
import styles from '../styles/feed.module.css'
import Post from './Post';
import Statusbar from './Statusbar';
import articles from '../dummyData'
function Feed() {
  console.log(articles);
  const [posts, setPosts] = useState(articles);
  return <div className={`${styles.feed} `}>
    <Statusbar />
    {posts.map(post => {
      return <Post key={post.id} post={post} addPost={setPosts} />
    })}
  </div>;
}

export default Feed;
