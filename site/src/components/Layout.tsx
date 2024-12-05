import { FC, ReactNode } from 'react'

import useTitle from '../hooks/useTitle'


export type LayoutProps = {
  title: string
  description?: string
  children: ReactNode
}


const Layout: FC<LayoutProps> = ({
  title,
  children,
}) => {
  useTitle(title)

  return (
    <>
      {children}
    </>
  )
}


export default Layout
