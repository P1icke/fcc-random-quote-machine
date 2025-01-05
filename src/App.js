import React from 'react';
import { random } from 'lodash';
import QuoteMachine from "./components/QuoteMachine";
import 'typeface-roboto'
import Grid2 from "@mui/material/Grid2";
import { styled } from '@mui/system';

const QUOTES_URL = 'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json'

const Container = styled(Grid2)({
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    };
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch(QUOTES_URL)
      .then(data => data.json())
      .then(quotes => { this.setState({ quotes: quotes }, this.assignNewQuoteIndex) });
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  generateNewQuoteIndex() {
    if (!this.state.quotes.length) {
      return undefined;
    }
    return random(0, this.state.quotes.length - 1);
  }

  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
  }

  render() {
    return (
      <Container container>
        <Grid2 id="quote-box" item xs={11} lg={8}>
          {
            this.selectedQuote ?
              <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} />
              : null
          }
        </Grid2>
      </Container>
    );
  }
}

export default App;
