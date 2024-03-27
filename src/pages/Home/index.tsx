import React, {useEffect, useState} from "react";
import {fetchPosts, setItem} from "../../redux/slices/postSlice";

import styles from './Home.module.scss'
import {RootState, useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";
import Post from "../../components/Post";
import Search from "../../components/Search";

const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const {allPosts} = useSelector((state: RootState) => state.posts)
  const [search, setSearch] = useState('')

  const getPosts = async () => dispatch(fetchPosts('https://jsonplaceholder.typicode.com/posts?_limit=5'))

  useEffect(() => {
    if (allPosts.length === 0 && search===''){
      getPosts()
      console.log(allPosts)
    }
  }, [search]);

  useEffect(() => {
    if (search !== '') {
      getPosts().then(data => {
        console.log(data.payload)
      })
      dispatch(setItem(allPosts.filter((post) => post.title.includes(search))))
    }
  }, [search]);

  return (
    <div className={styles.root}>
      <h1>Блог</h1>
      <p>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
      <Search setSearch={setSearch}/>
      {allPosts.length && (<div className={styles.all_posts}>
        {<Post first={true} {...allPosts[0]}/>}
        <div className={styles.posts}>
          {allPosts.slice(1).map((post) => <Post key={post.id} {...post}/>)}
        </div>
      </div>) }
    </div>
  )
}

export default Home