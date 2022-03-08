import styled, { css } from 'styled-components';

export function SearchBar({ handleChange }) {
  return <Search onChange={handleChange}></Search>;
}

const Search = styled.input`
  font-size: 30px;
`;
