import React from 'react'

export default function MilMomBtn({text= "text-black", font="font-medium", py="py-2", px="px-3", content="Đăng nhập", className=""}) {
  return (
    <div className={`bg-red-300 text-center ${text} ${font} ${py} ${px} ${className}`} dangerouslySetInnerHTML={{ __html: content }}></div>
  )
}
