'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function loginAction(_: unknown, formData: FormData): Promise<{ error: string }> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (
    email === process.env.DEMO_EMAIL &&
    password === process.env.DEMO_PASSWORD
  ) {
    const cookieStore = await cookies()
    cookieStore.set('session', process.env.SESSION_SECRET!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })
    redirect('/dashboard')
  }

  return { error: 'Invalid email or password.' }
}
