'use client'
import "@/styles/style.css";
import Template from "./templates";
import {auth} from '@/auth'
import { useEffect } from "react";
import {useSession} from "next-auth/react"
export default  function Home() {
  const session =  useSession()
  console.log(session.data)
  return (
    <Template />
  );
}
