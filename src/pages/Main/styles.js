import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-top: 60px;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    color: #444;
    height: 55px;
    font-size: 18px;
    background: #fff;
    padding: 0 20px;
    border-radius: 3px;
    border: ${props => (props.error ? '2px solid #f00' : 0)};
  }

  button {
    border: 0;
    color: #fff;
    height: 55px;
    font-size: 20px;
    padding: 0 20px;
    font-weight: bold;
    border-radius: 3px;
    margin-left: 010px;
    background: #63f5b0;

    &:hover {
      background: #52d89f;
      cursor: pointer;
    }
  }
`;
