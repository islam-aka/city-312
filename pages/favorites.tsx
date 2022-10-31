import Header from '@/components/layout/Header/Header'
import UserProfile from '@/components/layout/UserProfile/UserProfile'
import React from 'react'

const favorites = () => {

  return (
    <>
    <Header />
    <div className='max-w-full'>
      <div className='flex justify-evenly  '>
        <div className='w-2/6'>
          <UserProfile />
        </div>
        <div className='w-8/12	'>
          favorites
        </div>
      </div>
    </div>
    </>
  )
}

export default favorites