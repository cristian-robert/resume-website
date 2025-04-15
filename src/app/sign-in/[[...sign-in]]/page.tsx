import { redirect } from 'next/navigation';

export default function SignInPage() {
  redirect('/');
  // This return is necessary for TypeScript but will not be reached
  // because redirect() throws an error.
  return null;
}