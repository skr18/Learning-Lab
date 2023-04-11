import React from 'react'
import useStyles from './styles'
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment'
import {useDispatch} from 'react-redux'
import {deletePost,likePost} from '../../../actions/posts'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import ChatIcon from '@mui/icons-material/Chat';
// import ROOM_ID from '../../../video-call/views/room.ejs'
// window.alert(ROOM_ID);

const Post = ({post,setCurrentId}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const changePage = () => {
    //   window.location.href = "https://www.youtube.com";
    // }
    // const rom = window.ROOM_ID;
    // window.alert(rom);
    return (
      <div>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
        <div className={classes.overlay}>
          <Typography variant='h6'>{post.creator}</Typography>
          <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
          <Button style={{color:'white'}} size='small' onClick={()=>setCurrentId(post._id)}>
            <MoreHorizIcon fontSize='default' />
          </Button>
        </div>
        <div className={classes.details}>
          <Typography variant='body2' color='textSecondary'>{post.tags.map((tag)=>`#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>
        <CardContent>
          <Typography className={classes.title} variant='body2' color='textSecondary' component='p' gutterBottom>{post.message}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size='small' color='primary' onClick={()=>dispatch(likePost(post._id))}>
            <ThumbUpAltIcon fontSize='small'/>
             Like
            {post.likeCount}
          </Button>
          <Button size='small' color='primary' onClick={()=>dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize='small'/>
            Delete
          </Button>
          <Button size='small' color='primary'>
            <VideoCallIcon fontSize='small'/>
            <a href="http://localhost:3030" target="_blank" style={{color:'inherit',textDecoration:'none'}}>
            Join
            </a>
          </Button>
          <Button size='small' color='primary' onClick={()=>{window.location.href = ""}}>
            <ChatIcon fontSize='small'/>
            Chat
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Post