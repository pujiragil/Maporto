import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children} : LayoutProps) {
  return (
    <div className="container mx-auto p-5 max-w-screen-xl">
      {children}
    </div>
  )
}