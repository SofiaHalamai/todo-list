import styled from 'styled-components';

export const StyledButtonDelete = styled.button`
  background: "write";
  background-color: #f44336;
  color: "palevioletred";
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #f44336;
  border-radius: 3px;
  text-transform: uppercase
`;

export const ContentForItem = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 400px;
  background: #fdf5e6;
  margin-top: 1em;
  
  @media (max-width: 455px) {
    flex-direction: column;
  }
`;