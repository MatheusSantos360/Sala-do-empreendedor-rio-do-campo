"use client";

import { Admin } from "@/types";
import axios from "axios";
import { FC, MouseEventHandler, useRef, useState } from "react";

interface LoginFormProps {
  setLoginState: (state: boolean) => void;
  setAdmin: (admin: Admin) => void;
}

export const LoginForm: FC<LoginFormProps> = ({ setLoginState, setAdmin }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loginHandler: MouseEventHandler = async (event) => {
    event.preventDefault();
    const password = ref.current?.value || "";

    if (!password) {
      setError("Please enter a password.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:3001/api/admin/login", {
        password  ,
      });

      if (response.data.success) {
        setLoginState(true);
        setAdmin(response.data.admin);
      } else {
        setError("Invalid password. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-1/2 bg-base-200 mx-auto p-5 rounded-lg shadow-lg translate-y-3/4 flex flex-col">
      <h1 className="text-3xl font-bold text-center mb-7">Login</h1>

      <form>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input ref={ref} type="password" className="grow" autoComplete="new-password" required />
        </label>
      </form>
      <button className="btn mt-6" onClick={loginHandler} disabled={isLoading}>
        {isLoading ? "Loading..." : "Entrar"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};
