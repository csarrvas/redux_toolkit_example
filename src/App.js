import { useEffect } from 'react';

import styled from '@emotion/styled';
import Quote from './components/Quote';
import { ReactComponent as Logo } from './logo.svg';

//Normal Redux
import { useDispatch } from 'react-redux';
import { getQuote } from './redux/actions/breakingBadQuoteActions';
import { increaseCounter } from './redux/actions/quoteCountActions';

//Reduxjs Toolkit
// import { getQuote } from './reduxjs_toolkit/actions/breakingBadQuoteActions';
// import { increaseCounter } from './reduxjs_toolkit/actions/quoteCountActions';
// import breakingBadQuoteSlice, { getQuote } from './reduxjs_toolkit/feature/breakingBadQuote';
// import quoteCountSlice from './reduxjs_toolkit/feature/quoteCountSlice';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  height: 100%;

  > svg {
    max-width: 100%;
  }
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 1.5rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  &:hover {
    cursor:pointer;
    background-size: 400px;
  }
`;

function App() {
  const dispatch = useDispatch();
  // const { increaseCounter } = quoteCountSlice.actions;

  useEffect( () => {
    dispatch(getQuote());
  }, [dispatch]);

  const handleClick = () => {
    // console.log(breakingBadQuoteSlice.actions);
    dispatch(increaseCounter());
    dispatch(getQuote());
  }

  return (
    <Container>
      <Logo />
      <Quote />
      <Button
        onClick={handleClick}
      >New Quote</Button>
    </Container>
  );
}

export default App;
