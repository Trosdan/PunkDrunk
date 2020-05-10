import styled from 'styled-components'

export const Container = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  padding: 10px;
`

export const BackButton = styled.span`
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  border-radius: 4px;
  border: 1px solid gray;

  :hover {
    cursor: pointer;
  }
`

export const DetailsWrapper = styled.div`
  margin: 10px 0 0;

  h2 {
    margin: 10px 0 5px;
  }

  .beerImg {
    position: relative;
    height: 350px;
  }

  .tagline {
    font-size: 15px;
    color: gray;
  }

  .description {
    margin: 10px 5px;
  }

  .firstBrewed {
    font-weight: bold;
  }

  .ingredients {
    display: flex;
    flex-direction: row;
  }

  .ingredientsItems {
    display: flex;
    flex-direction: column;
    flex: 0.5;

    h3 {
      margin-bottom: 5px;
    }
  }
`
