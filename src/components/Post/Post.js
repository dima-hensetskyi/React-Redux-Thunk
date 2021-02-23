import { React } from 'react';
import { useDispatch } from 'react-redux';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
} from '@material-ui/core/';

import './Post.css';

import { setValueButtons } from '../../redux/actions/add-post-actions';

const Post = ({
  author,
  content,
  image,
  comment = 0,
  share = 0,
  like = 0,
  id,
  addcomment = false,
  addshare = false,
  addlike = false,
}) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const mounth = new Date().getMonth();
  const day = new Date().getDate();
  const options = { month: 'long' };
  const correctMounth = new Intl.DateTimeFormat('en-US', options).format(mounth);

  const hendler = (event) => {
    const buttonType = event.target.id;

    switch (buttonType) {
      case 'comment':
        dispatch(setValueButtons(id, addcomment, comment, buttonType));
        break;
      case 'share':
        dispatch(setValueButtons(id, addshare, share, buttonType));
        break;
      case 'like':
        dispatch(setValueButtons(id, addlike, like, buttonType));
        break;
      default:
        return;
    }
  };

  return (
    <Accordion className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className={classes.heading}
      >
        <Typography className={classes.heading} component={'div'}>
          <div className="author">
            <img src={author.avatar} alt="author" />
            <p className="name">{author.name}</p>
            <p className="autor-information">{`${author.username}`}</p>
            <p className="autor-information">{`•`}</p>
            <p className="autor-information">{`${day} ${correctMounth}`}</p>
          </div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component={'div'}>
          <div className="content">
            <p className="content-text">{content}</p>
            <img src={image} alt={`post content`} />
          </div>
          <div className="badges">
            <span id="comment" className="badg" onClick={hendler}>
              <i id="comment" className="far fa-comment-alt"></i>
              {comment}
            </span>
            <span id="share" className="badg" onClick={hendler}>
              <i id="share" className="fas fa-share-alt"></i>
              {share}
            </span>
            <span id="like" className="badg" onClick={hendler}>
              {addlike ? (
                <i id="like" className="fas fa-heart"></i>
              ) : (
                <i id="like" className="far fa-heart"></i>
              )}
              {like}
            </span>
            <span id="forward" className="badg" onClick={hendler}>
              <i id="forward" className="far fa-share-square"></i>
            </span>
          </div>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Post;
const useStyles = makeStyles((theme) => ({
  root: {
    width: '600px',
    color: '#fff',
    backgroundColor: '#1976d2',
    border: '0',
    marginBottom: '20px',
    marginTop: '10px',
  },
  heading: {
    height: '85px',
  },
}));
