import React from 'react';
import Button from "@mui/material/Button";
import {Typography} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = (props) => (
  <Card>
    <CardContent align='center' {...props}>
      {
        props.selectedQuote ?
          (
            <Typography id="text" variant="body2" color="textSecondary" component="p">
              {props.selectedQuote.quote} - <span id="author" >{props.selectedQuote.author}</span>
            </Typography>
          ) : null
      }
    </CardContent>
    <CardActions>
      <Button id="new-quote" size="small" onClick={props.assignNewQuoteIndex}> Next Quote </Button>
      <IconButton
        id="tweet-quote"
        target="_blank"
        href={encodeURI(`https://twitter.com/intent/tweet?text=${props.selectedQuote.quote}`)}>
        <FontAwesomeIcon icon={faTwitter} size="md"/>
      </IconButton>
    </CardActions>
  </Card>
);

export default QuoteMachine;