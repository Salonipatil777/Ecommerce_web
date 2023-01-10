import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "../../routes/accets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 55px;
  height: 55px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight:bold;

  //
`;
export const ShoppIcon = styled(ShoppingIcon)`
  width: 33px;
  height: 33px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
