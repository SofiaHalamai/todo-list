import styled from 'styled-components';
import { Button, Input } from "@mui/material";

export const StyledButtonAdd = styled(Button)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

export const StyledInput = styled(Input)`
  margin-left: 1em;
`;

export const TitleTodo = styled.h1 `
  text-align:center;
  text-decoration: underline;
`;

export const ContentForm = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 400px;
  
  @media (max-width: 455px) {
    flex-direction: column;
  }
`;