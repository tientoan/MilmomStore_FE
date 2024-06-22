import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedLayout() {
    const [account, setAccount] = useRecoilState(accountAtom);
  return (
    <>
    {account?<Outlet />:<Navigate to={'/'}/>}
    </>
  )
}
