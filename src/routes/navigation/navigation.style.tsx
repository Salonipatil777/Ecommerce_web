import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: #00bfff;
  width: 109%;
  // margin: 0;
  // padding: 0;
  margin-left: -49px;
  margin-top: -31px;
  margin-bottom: 50px
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 80px;
  padding: 25px;
  color: #fb580d;
  // margin-bottom:10px;
  margin-top: -12px;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
  padding-top: 15px;
  text-decoration: none;
  font-size: 21px;
  font-family: monospace;
  font-weight:50px;
  color:white;
`;