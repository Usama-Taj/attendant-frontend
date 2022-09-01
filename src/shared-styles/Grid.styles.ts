import styled from "styled-components";

type GridTitleProps = {
  remSize?: string;
};

type ShadowGridItemProps = {
  widthPercent?: string;
};

export const GridCenter = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const Center = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
`;

export const GridTitle = styled.h2<GridTitleProps>`
  font-size: ${(props) => props && props.remSize}rem;
  text-align: center;
  font-weight: bold;
`;

export const ShadowGridItem = styled.div<ShadowGridItemProps>`
  width: ${(props: any) => props.widthPercent}px;
  padding: 10px;
  border: 1px solid rgba(107, 102, 102, 0.5);
  border-radius: 15px;
  box-shadow: -0px 0px\8px #d9d9d9, 0px -0px 8px #e7e7e7;
`;
