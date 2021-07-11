import React from 'react'
import HeaderColumn from './HeaderColumn'
import styles from './Header.module.scss'
import { generateClassNameString } from '../../utils/Generators';

/**
 * @name Header
 * @description Renders the Header compoennt
 * @param {*} props Props
 * @returns Component
 */


export const Header = (props) => {
  const {
    classes,
    children,
    ...other
  } = props;

  const className =
    generateClassNameString(
      styles,
      classes
        ?.split(' ')
    )

  return (
    <div
      className={className}
      {...other}
    >
      <div>
        {children}
      </div>
    </div>
  )
}

Header.Column = HeaderColumn;