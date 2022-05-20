import React, { FC } from 'react'
import clsx from 'clsx';
import classes from './Container.module.scss';

type IProps = {
    className?: string;
    wrapperClassName?: string;
    children: any;
}

const Container: FC<IProps> = ({children, wrapperClassName, className}) => {
  return (
    <div className={clsx(classes.root, wrapperClassName)}>
        <div className={clsx(classes.content, className)}>
            {children}
        </div>
    </div>
  )
}

export default Container