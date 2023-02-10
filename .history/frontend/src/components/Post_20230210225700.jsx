import React from 'react'

const Post = (props) => {
  return (
      <div>
           <Row className="row">
                {posts.map((post) => (
            
                    <div className="post border shadow rounded" key={post.slug}>
                      <div className="img p-2">
                        <Link className="link" to={`/post/${post.slug}`}>
                          <img
                            src={post.img}
                            alt={post.title}
                            className="post-image rounded shadow border img-fluid img-thumbnail"
                          />
                          <p className="content-title font-weight-light  text-center">
                            {post?.title}
                          </p>
                        </Link>
                        <p className="content-post truncate">
                          {getText(post.description)}
                        </p>
                        <Button className="btn btn-home mb-2">Read More</Button>
                      </div>
                    </div>
               
                  ))}
              </Row>
    </div>
  )
}

export default Post