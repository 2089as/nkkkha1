import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography,ButtonBase } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';
const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();

//const openPost = () => {
  //navigate(`/posts/${post._id}`);
//};
  return (
    <Card className={classes.card} style={{ marginRight: '10px', marginBottom:'2px', margin: '20px', width: '345px',height: '75%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      
      <CardMedia className={classes.media} image={post.selectedFile || ''} title={post.title} 
        style={{ height: 400, objectFit: 'cover' }}/>
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        
        <Button style={{ color: 'inherit' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="medium" /></Button>
      </div>

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
      <Typography variant="body2" color="" component="p">{post.message}</Typography>
      </CardContent>
      
      <CardActions className={classes.cardActions}>
        <Button size="small" color="default" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Post;