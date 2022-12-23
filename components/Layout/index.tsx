import Head from "next/head";
import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children} : LayoutProps) {
  return (
    <div className="container mx-auto p-5 max-w-screen-xl">
      <Head>
        <title>Puji Ragil</title>
      </Head>
      {children}
    </div>
  )
}