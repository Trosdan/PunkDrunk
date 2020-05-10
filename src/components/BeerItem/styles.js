import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 10px 0;
  margin: 10px 0;
  background-color: #fff;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2);
  transition: 1s;

  :hover {
    cursor: pointer;
    transition: 1s;
    box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.2);
  }
`

export const ImgBeer = styled.div`
  display: flex;
  flex: 0.1;
  justify-content: center;
  align-items: center;
  img {
    height: 75px;
  }
`

export const InfoBeer = styled.div`
  display: flex;
  flex: 0.9;
  flex-direction: column;

  .NameBeer {
    font-weight: bold;
    font-size: 18px;
  }

  .SubNameBeer {
    font-size: 15px;
    color: gray;
  }
`
