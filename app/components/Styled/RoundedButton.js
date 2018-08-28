// ButtonClassic.jsx
import styled from 'styled-components'

const RoundedButton = styled.button`
  background: #fff;
  color: #333;
  font-size: 0.5em;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  width: 20px;
  height: 20px;

/* Style sub-classes */
  &.primary {
    color: #fff;
    background: #337ab7;
    border-color: #2e6da4;
  }
  &.success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
  }
  &.disabled {
    color: #cdcaca;
    background-color: #fff6f6;
    border: 1px solid #aaa;
  }
    &.frozen {
    color: #70f7ff;
    background-color: #ffffff;
    border: 1px solid #70f7ff;
  }
`;

export default RoundedButton;