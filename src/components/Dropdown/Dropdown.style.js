import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const EmptyMsg = styled.span`
  font-size: 18px;
  margin: 50px auto;
  font-weight:bold;
  font-family: cursive;
  `;

export const DropdownItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  margin-top:10px;
`;

export const DropdownBtn = styled.button`
  margin-top: auto;
  background-color:black;
  color:white;


`

