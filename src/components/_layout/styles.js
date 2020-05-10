import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 720px;
  min-width: 480px;
`
export const Header = styled.div`
  display: flex;

  .title {
    padding: 15px 15px 0;
    font-size: 48px;
    font-weight: bold;
  }

  .subTitle {
    padding: 0 15px 15px;
    color: gray;
    font-size: 18px;
  }

  .imgLogo {
    z-index: -5;
    position: relative;
    img {
      align-self: flex-end;
      height: 450px;
      margin-bottom: -200px;
    }
  }
`
