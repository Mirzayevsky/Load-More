import axios from 'axios';
import { useEffect, useState } from 'react';
import Todo from './Todo';

const App = () => {
  const [visible, setVisible] = useState(5);
  const [showSeeMore, setShowSeeMore] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=24')
      .then((resp) => {
        setPosts(resp.data);
        if (resp.data.length < 6) {
          setShowSeeMore(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLoadMore = () => {
    setVisible(visible + 2);
    const postsLength = posts.length;
    const nowShowing = visible + 2;
    if (postsLength <= nowShowing) {
      setShowSeeMore(false);
    }
  };

  return (
    <div className='container py-5'>
      {posts &&
        posts.slice(0, visible).map((post) => (
          <div key={post.id}>
            <Todo post={post} />
          </div>
        ))}
      {showSeeMore && (
        <p className='my-3 text-center'>
          <button className='btn btn-primary btn-sm' onClick={handleLoadMore}>
            See More
          </button>
        </p>
      )}
    </div>
  );
};

export default App;
