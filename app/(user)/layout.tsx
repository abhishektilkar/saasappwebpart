import React, { Suspense } from 'react'
import Loading from './loading';

const UserLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='container w-full max-w-screen-xl mx-auto py-8 px-2.5 lg:px-20'>
      <Suspense fallback={<Loading />}>{children} </Suspense>
    </div>
  )
}

export default UserLayout;