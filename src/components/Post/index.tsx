import React, {useRef} from "react";
import styles from './Post.module.scss'
import {Link} from "react-router-dom";
import Thumbs from "../Thumbs";

export type PostProps = {
  id: number
  title: string,
  body: string,
  first?: boolean,
  like: number,
  likes: number,
  dislikes: number,
}

const Post: React.FC<PostProps> = (post) => {
  const divBlock = useRef<HTMLDivElement>(null);

  return (
    <div ref={divBlock} className={styles.root + (post.first ? ' ' + styles.first : '') }>
      <img className={styles.main_image} src={`https://placehold.co/1920x1080/png`} alt='img'/>
      <div className={styles.post_info}>
        <h2 className={styles.title}>{post.title}</h2>
        {post.first && <p>{post.body}</p>}
        <div className={styles.interactive}>
          <Thumbs {...post}/>
          <Link to={`/posts/${post.id}`}>
            <button>Читать далее</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Post