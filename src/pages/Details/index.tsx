import React, {useEffect} from "react";

import styles from './Details.module.scss'
import {Link, useParams} from "react-router-dom";
import {fetchPosts, setLike} from "../../redux/slices/postSlice";
import Thumbs from "../../components/Thumbs";
import {useSelector} from "react-redux";
import arrow from '../../assets/images/arrow.svg'
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
      <div className={styles.interactive}>
        <Link to={`/`}>
          <button><img
            className={styles.arrow}
            onClick={() => {
              dispatch(setLike(id))
            }}
            src={arrow}
            alt="arrow"
          /><span>Вернуться к статьям</span></button>
        </Link>
        {post && <Thumbs {...post}/>}
      </div>
      {post && (
        <div className={styles.post}>
          <h1>{post.title}</h1>
          <div className={styles.inside}>
            <img className={styles.main_image} src={`https://placehold.co/1920x1080/png`} alt='img'/>
            <p>{post.body}</p>
          </div>
        </div>)
      }

    </div>
  )
}

export default Details