import styled from '@emotion/styled';

//Redux
import { useSelector } from 'react-redux';

const Container = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  border-radius: .5rem;
  background-color: #fff;
  max-width:800px;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 1rem;
    font-size: 1.5rem;

    @media (min-width: 600px) {
      font-size: 2rem;
      padding-left: 2rem;
    }

    &::before {
      content: open-quote;
      font-size: 3rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -1rem;

      @media (min-width: 600px) {
        font-size: 5rem;
      }
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1rem;
    font-weight:bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;

    @media (min-width: 600px) {
      font-size: 1.2rem;
    }
  }
`;

const Quote = () => {
  const breakingBadQuote = useSelector(state => state.breakingBadQuote.data);
  
  return ( 
    <Container>
      <h1>{breakingBadQuote.quote}</h1>
      <p>- {breakingBadQuote.author}</p>
    </Container>
  );
}
 
export default Quote;
