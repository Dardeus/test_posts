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
      <h2>{post.title}</h2>
      {post.first && <p>{post.body}</p>}
      <Thumbs {...post}/>
      <Link to={`/posts/${post.id}`}>
        Читать далее
      </Link>
    </div>
  )
}

export default Post