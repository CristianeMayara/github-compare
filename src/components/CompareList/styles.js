import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
  margin-top: 50px;
  overflow: hidden;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: #b791ed;
  /* border: 1px solid #fff; */
  height: ${props => (props.isEmpty ? '386px' : null)};
`;

export const Repository = styled.div`
  width: 250px;
  display: flex;
  margin: 0 10px;
  background: #fff;
  border-radius: 3px;
  flex-direction: column;

  header {
    display: flex;
    padding: 30px;
    align-items: center;
    flex-direction: column;
  }

  img {
    width: 64px;
  }

  strong {
    font-size: 24px;
    margin-top: 10px;
  }

  small {
    color: #666;
    font-size: 14px;
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        color: #999;
        font-size: 12px;
        margin-left: 4px;
        font-style: italic;
        font-weight: normal;
      }

      &:nth-child(2n-1) {
        background: #f5f5f5;
      }
    }
  }
`;
