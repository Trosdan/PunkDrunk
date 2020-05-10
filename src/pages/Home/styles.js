import styled from 'styled-components'

export const Container = styled.div``

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .PageItem {
    background-color: white;
    border: 1px solid gray;
    min-width: 20px;
    border-radius: 4px;
    padding: 4px 2px;
    margin: 0 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .PageItemSelect {
    background-color: gray;
  }
`
