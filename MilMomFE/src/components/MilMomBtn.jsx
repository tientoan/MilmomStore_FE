import React from 'react'

export default function MilMomBtn({text= "text-black", font="font-medium", my="my-2", mx="mx-3", content="Đăng nhập", className=""}) {
  return (
    <div className={`bg-red-200 ${text} ${font} ${my} ${mx} ${className}`}>{content}</div>
  )
}
