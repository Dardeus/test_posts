import React, {useEffect} from "react";
import {fetchPosts} from "../../redux/slices/postSlice";

import styles from './Home.module.scss'
import {RootState, useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";
import Post from "../../components/Post";
import Search from "../../components/Search";

const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const {allPosts} = useSelector((state: RootState) => state.posts)
  const {search} = useSelector((state: RootState) => state.filter)
  const filtered = allPosts.filter((post) => post.title.includes(search))

  useEffect(() => {
    if (allPosts.length === 0 && search===''){
      dispatch(fetchPosts('https://jsonplaceholder.typicode.com/posts?_limit=5'))
    }
  }, [search]);

  return (
    <div className={styles.root}>
      <h1>Блог</h1>
      <p>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
      <Search search={search}/>
      {filtered.length ? (<div className={styles.all_posts}>
        {<Post first={true} {...filtered[0]}/>}
        <div className={styles.posts}>
          <div className={styles.left}>
            {filtered.slice(1, 3).map((post) => <Post key={post.id} {...post}/>)}
          </div>
          <div className={styles.right}>
            {filtered.slice(3, 5).map((post) => <Post key={post.id} {...post}/>)}
          </div>
        </div>
      </div>) : <></>}
    </div>
  )
}

export default Home