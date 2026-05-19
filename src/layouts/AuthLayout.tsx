import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
  <div className="flex min-h-dvh items-center justify-center bg-slate-50 p-4">
    <Outlet />
  </div>
  )
}