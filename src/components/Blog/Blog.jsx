import React from 'react'
import './Blog.scss'

export default function Blog({ blog, handeleDelete, editablePostId, dispatch }) {


  const handleEdit = (e) => {
    e.preventDefault();
    const { title, desc, date, avatar } = e.target;
    const post = {
      title: title.value,
      desc: desc.value,
      date: date.value,
      avatar: `./images/${avatar?.files[0].name}`,
    }
    dispatch({ type: 'update-post', payload: post })
    updateEditPostId()
  }
  const updateEditPostId = (payload = null) => {
    dispatch({ type: 'set-edit-post', payload })
  }

  return (
    <div className='Blog'>
      <button className='Blog__delete' onClick={() => handeleDelete(blog.id)}>
        <i className='bi bi-x-lg'></i>
      </button>
      <img src={blog.poster} alt="" />
      <div className="Blog__content">
        {(editablePostId === blog.id) ? (
          <form className='Blog__editForm' onSubmit={handleEdit}>
            <input type="text" name='title' placeholder='title' />
            <textarea name="desc" id="desc" cols="30" rows="4"></textarea>
            <input type="date" name='date' />
            <input type="file" name='avatar' />
            <div>
              <button onClick={updateEditPostId}>cancel</button>
              <button type="submit">save</button>

            </div>
          </form>
        ) : (
          <>
            <h2>{blog.title}</h2>
            <p>{blog.desc}</p>
            <div className="Blog__footer">
              <img src={blog.avatar} className='Blog__avatar' />
              <p>
                {blog.date}
              </p>
              <button className='Blog__edit' onClick={() => {
                updateEditPostId(blog.id)
              }}>
                <i className='bi bi-pencil'></i>
                Edit post
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  )
}
