import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import {Grid,CircularProgress} from '@mui/material'
const Posts = ({setCurrentId}) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  // console.log(posts);

  return (
    !posts.length?<CircularProgress />:(
      <Grid className={classes.container} container alignItems='stretch' spacing='3'>
        {posts.map((post)=>(
          <Grid key={post.id} item xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId}/>
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
