import React from 'react';
import { generateClassNameString } from '../../utils/Generators';
import styles from './Section.module.scss';
import SectionColumn from './SectionColumn';

/**
 * @name Section
 * @description Redners the Section component
 * @param {*} Props props
 * @returns Component
 */
export const Section = (props) => {
  const {
    children,
    classes,
    ...other
  } = props

  const className = 
    generateClassNameString(
      styles,
      classes
        ?.split(' ')
    );

  return (
    <div
      className={className}
      {...other}
    >
      {children}
    </div>
  )
}

Section.Column = SectionColumn

// export default Section;