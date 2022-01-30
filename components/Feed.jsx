import { useEffect, useState } from 'react';
import styles from '../styles/feed.module.css'
import Post from './Post';
import Statusbar from './Statusbar';
import articles from '../dummyData'
function Feed() {
  const [posts, setPosts] = useState(articles);

  return <div className={`${styles.feed} `}>
    <Statusbar />
    {posts.map(post => {
      return <Post key={post.id} post={post} posts={posts} addPosts={setPosts} />
    })}
  </div>;
}

export default Feed;
