import React, {useEffect} from "react";

import styles from './Details.module.scss'
import {Link, useParams} from "react-router-dom";
import {fetchPosts} from "../../redux/slices/postSlice";
import Thumbs from "../../components/Thumbs";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../redux/store";

const Details: React.FC = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const {allPosts} = useSelector((state: RootState) => state.posts)
  const post = allPosts.find(obj => obj.id === Number(id!))

  useEffect(() => {
    if (!allPosts.length) {
      dispatch(fetchPosts('https://jsonplaceholder.typicode.com/posts'))
    }
  }, []);

  return (
    <div className={styles.root}>
      <Link to={`/`}>
        Вернуться к статьям
      </Link>
      {post && (
        <div className={styles.post}>
          <Thumbs {...post}/>
          <h1>{post.title}</h1>
          <img className={styles.main_image} src={`https://placehold.co/1920x1080/png`} alt='img'/>
          <p>{post.body}</p>
        </div>)
      }

    </div>
  )
}

export default Details