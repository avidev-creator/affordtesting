


import React from 'react'

export default function UserPage({ params }: {
  params: {
    userId: string
  }
}) {
  console.log(params.userId)

  return (
    <div>Post of user id: {params.userId}</div>
  )
}

