import { useState } from 'react';
import styles from '../styles/post.module.css'
function Post(props) {
  const [liked, setLiked] = useState(false);
  const [addComment, setAddComment] = useState(null);
  function onComment() {
    console.log(props.post.comments);
  }

  return <div className={`${styles.post} shadow`}>
    <div className={`${styles.postTopContainer}  d-flex align-items-start justify-content-start mb-2`}>
      <img src={props.post.userImg} className={`${styles.userImg} `} alt="User Image" />
      <div className='d-flex flex-column'>
        <span className='fw-bold'>{props.post.username}</span>
        <span className='fw-lighter'>{props.post.userDesc}</span>
        <span className='fw-lighter'>{props.post.createdAt}</span>
      </div>
    </div>
    <div className={`${styles.postMiddleContainer}`}>
      <div className={`slicedCaption${props.post.id}`}>
        {props.post.caption.length > 140 ? props.post.caption.slice(0, 140) + " ... " : props.post.caption}
        {props.post.caption.length > 140 ? <span className={`${styles.seeMoreBtn}`} onClick={() => {
          $(`.slicedCaption${props.post.id}`).addClass(`${styles.hidden}`)
          $(`.fullCaption${props.post.id}`).removeClass(`${styles.hidden}`)
        }}>See More</span> : ""}
      </div>
      <div className={`${styles.hidden} fullCaption${props.post.id}`}>{props.post.caption}</div>
      {props.post.imgUrl ? <img className={`${styles.postImg}`} src={props.post.imgUrl} /> : ""}

    </div>
    <div className={`${styles.postBottomContainer} mt-2`}>
      <div className={`${styles.postInfo} d-flex justify-content-between`} >
        <div className='likes' type="button" data-bs-toggle="modal" data-bs-target={`#exampleModal${props.post.id}`}>{liked ? "You and " : ""}{props.post.likes.length} people liked this</div>
        <div className="modal fade" id={`exampleModal${props.post.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Likes on {props.post.username}'s post</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {props.post.likes.map(user => {
                  return <div key={user.userId} className='d-flex align-items-center my-2'>
                    <img src={'images/userAvatar.svg'} style={{ maxHeight: "60px" }} alt="" srcSet="" />
                    <h6 className='mx-2'>{user.username}</h6>
                  </div>
                })}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ cursor: "pointer" }} onClick={() => {
          $(`.comments${props.post.id}`).toggleClass(`${styles.hidden}`)
        }}>{props.post.comments.length} comments</div>
      </div>
      <div className={`${styles.postButtons} d-flex justify-content-between mt-3`}>
        <span className={`${styles.likeBtn} likebtn${props.post.id} ${styles.postBtn} d-flex align-items-center`} onClick={() => {
          $(`.fa-heart${props.post.id}`).toggleClass('far fas')
          $(`.likebtn${props.post.id}`).toggleClass(`${styles.BtnClicked}`)
          setLiked(!liked)
        }}>
          <i aria-hidden className={`far fa-heart fa-heart${props.post.id}`}></i> <span className='likeText' style={{ fontSize: "15px", marginLeft: "5px" }}>Like</span>
        </span>
        <span className={`${styles.likeBtn} ${styles.postBtn} d-flex align-items-center`} onClick={() => {
          $(`.commentInput${props.post.id}`).focus()
        }}>
          <i aria-hidden className="far fa-comments"></i> <span style={{ fontSize: "15px", marginLeft: "5px" }}>Comment</span>
        </span>
        <span className={`${styles.likeBtn} ${styles.postBtn} d-flex align-items-center`}>
          <i aria-hidden className="far fa-share-square"></i> <span style={{ fontSize: "15px", marginLeft: "5px" }}>Share</span>
        </span>
        <span className={`${styles.likeBtn} ${styles.postBtn} d-flex align-items-center`}>
          <i aria-hidden className="far fa-paper-plane"></i> <span style={{ fontSize: "15px", marginLeft: "5px" }}>Send</span>
        </span>

      </div>
      <div className='mt-3 d-flex justify-content-start align-items-center'>
        <img className={`${styles.commentImage}`} src='/images/userAvatar.svg'></img>
        <div style={{ width: "100%" }}>
          <div className={`${styles.commentBoxInputContainer} d-flex justify-content-start align-items-center my-2`}>
            <input onChange={(e) => {
              setAddComment(e.target.value)
            }} onInput={() => {
              $('.postBtn').removeClass(`${styles.hidden}`)
            }} className={`${styles.commentBoxInput} commentInput${props.post.id}`} type="text" placeholder='Comment' />
            <span>
              <i className="far fa-smile mx-2"></i>
            </span>
            <span>
              <i className="far fa-image"></i>
            </span>
          </div>


        </div>

      </div>
      <div className='d-flex justify-content-end'>
        <button onClick={onComment} className={`btn btn-outline-dark postBtn ${styles.hidden}`}>Post</button>

      </div>

      <div className={`comments${props.post.id} ${styles.hidden} `}>
        {props.post.comments.map(comment => {
          return <div key={comment.userId} className={`${styles.comment} my-3 d-flex align-items-center`}>
            <img src={comment.userImg} className={styles.commentImage}></img>
            <div className={`${styles.commentContainer} d-flex flex-column `}>
              <span className='d-flex flex-column mb-2'>
                <span className='fw-bold'>{comment.username}</span>
                <span className='fw-normal text-muted' style={{ fontSize: "12.5px" }}>{comment.userDesc}</span>
              </span>
              <p className='fw-normal'>{comment.comment}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  </div>;
}

export default Post;
