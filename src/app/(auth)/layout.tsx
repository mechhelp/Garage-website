import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#8F00FF]">{children}</div>
  )
}

export default Layout