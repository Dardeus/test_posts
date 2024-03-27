import React from "react";
import styles from './Thumbs.module.scss'
import thumbDownAlt from '../../assets/images/thumbDownAlt.svg'
import thumbDown from '../../assets/images/thumbDown.svg'
import thumbUpAlt from '../../assets/images/thumbUpAlt.svg'
import thumbUp from '../../assets/images/thumbUp.svg'
import {setDislike, setLike} from "../../redux/slices/postSlice";
import {useDispatch} from "react-redux";
import {PostProps} from "../Post";


const Thumbs: React.FC<PostProps> = ({id, like, likes, dislikes}) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.root}>
      <img
        className={styles.thumbUpAlt}
        onClick={() => {
          console.log(like)
          dispatch(setLike(id))
        }}
        src={ like === 1 ? thumbUp : thumbUpAlt }
        alt="Thumb Up Alt"
      />
      <span>{likes + (like === 1 ? 1 : 0)}</span>
      <img
        className={styles.thumbDownAlt}
        onClick={() => {
          console.log(like)
          dispatch(setDislike(id))
        }}
        src={ like === -1 ? thumbDown : thumbDownAlt }
        alt="Thumb Down Alt"
      />
      <span>{dislikes + (like === -1 ? 1 : 0)}</span>
    </div>
  )
}

export default Thumbs