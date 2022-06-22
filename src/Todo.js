const Todo = ({ post }) => {
  return (
    <div>
      <div className='card mt-3'>
        <div className='card-body'>
          <h2 className='mb-0'>#{post.id}</h2>
          <h5 className='mb-2'>
            <strong> Title:</strong> {post.title}
          </h5>
          <p className='mb-0'>
            <strong>Body:</strong> {post.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Todo;
