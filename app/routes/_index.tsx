import { prisma } from 'prisma/lib/prisma'
import React from 'react'
import { authenticate } from '~/qumra.server'



export async function loader({request}:{request:Request}) {
    const data = await prisma.session.findMany()
    await authenticate.admin(request)
  
    // await prisma.session.create({data:{
    //   store:"test",
    //   accessToken:"test",
    //   isOnline:true,
    //   userId:"test",
    //   firstName:"test",
    //   lastName:"test",
    //   email:"test",
    //   emailVerified:true,
    //   refreshToken:"test",
    //   createdAt:new Date(),
    //   lastSeenAt:new Date(),
    // }})
    return Response.json(data)
    // console.log("🚀 ~ loader ~ admin:", admin.graphql(``,{}))
    
}


function Index() {
  return (
    <div>index</div>
  )
}

export default Index