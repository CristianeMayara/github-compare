import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-top: 60px;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  margin-top: 20px;
  max-width: 400px;

  input {
    flex: 1;
    color: #444;
    height: 55px;
    font-size: 18px;
    padding: 0 20px;
    background: #fff;
    border-radius: 3px;
    border: ${props => (props.error ? '2px solid #f00' : 0)};
    margin-bottom: ${props => (props.error ? null : '30px')};
  }

  button {
    border: 0;
    color: #fff;
    width: 80px;
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

export const Error = styled.span`
  color: #f00;
  height: 30px;
`;
