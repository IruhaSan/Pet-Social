import React, { FC } from 'react'
import Header from './components/Header'

type IProps = {
    children?: any;
}

const Layout: FC<IProps> = (props) => {
  return (
    <div>
        <Header />
        { props.children }
    </div>
  )
}

export default Layout