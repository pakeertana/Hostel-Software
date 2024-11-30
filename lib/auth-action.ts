'use server'
import { auth, signIn } from '@/auth'

export async function LogIn({email,password}) {
  return await signIn('credentials', { email, password, redirect: false })
}

export async function loggedIn() {
  return await auth()
}