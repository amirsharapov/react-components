import React from 'react';
import {
  StyledModal,
  StyledModalBackground
} from './ModalStyles';
import { Box } from '../Box/Box';


/**
 * @name Modal
 * @description Renders a modal.
 * @param {*} props Props
 * @prop alignItems
 * @prop backgroundColor
 * @prop theme
 * @prop justifyContent
 * @returns Component
 */
export const Modal = (props) => {
  const theme = useThemeContext();

  return (
    <StyledModal
      className="af-modal"
      hidden={!props.show}
      theme={theme ? theme : null}
      {...props}
    >
      <StyledModalBackground
        className="af-modal-background"
        theme={theme ? theme : null}
        {...props}
      >
        <Box
          minWidth={props.width ? props.width.toLowercase() : '40vw'}
          maxWidth={props.width ? props.width.toLowercase() : '40vw'}
          margin={props.margin ? props.margin.toLowercase() : '20px'}
          theme={theme ? theme : null}
          {...props}
        >
          {props.children}
        </Box>
      </StyledModalBackground>
    </StyledModal>
  )
}