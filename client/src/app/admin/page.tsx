"use client"

import { AdminPanel } from "@/components/AdminPanel";
import { LoginForm } from "@/components/LoginForm";
import { NavBar } from "@/components/NavBar";
import { Admin } from "@/types";
import { useState } from "react";

export type Layouts = "default" | "materials" | "slider";

export default function Login() {
  const [admin, setAdmin] = useState<Admin | undefined>(undefined);
  const [loggedIn, setLoggedIn] = useState(false);
  const [layout, setLayout] = useState<Layouts>("default");
  const backButton = layout !== "default";
  
  return (
    <div>
      <NavBar icons={false} backButton={backButton} setLayout={setLayout} />
      {loggedIn ? <AdminPanel admin={admin!} section={layout} setLayout={setLayout} /> : <LoginForm setLoginState={setLoggedIn} setAdmin={setAdmin} />}
    </div>
  );
}
