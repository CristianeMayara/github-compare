import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
  flex-direction: row;
`;

export const Repository = styled.div`
  width: 250px;
  display: flex;
  margin: 0 10px;
  background: #fff;
  border-radius: 3px;
  flex-direction: column;

  header{
    padding 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 64px;
  }

  strong {
    font-size: 24px;
    margin-top: 10px;
  }

  small {
    fton-size:14px;
    color:#666;
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color:#999;
        font-style: italic;
      }

      &:nth-child(2n-1) {
        background: #f5f5f5;
      }
    }
  }
`;