import { Layouts } from "@/app/admin/page";
import { FC } from "react";
import { InstagramIcon } from "./InstagramIcon";
import { LogoIcon, LogoText } from "./Logo";
import { ThemeController } from "./ThemeController";

export const NavBar: FC<{ icons: boolean; backButton?: boolean; setLayout?: (layout: Layouts) => void }> = ({ icons, backButton, setLayout }) => {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar mx-auto px-4">
        <div className="navbar-start">
          {icons && (
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li className="sm:hidden">
                  <a href="">Instagram</a>
                </li>
                <li>
                  <a href="/#about">Sobre</a>
                </li>
                <li>
                  <a href="/#services">Serviços</a>
                </li>
                <li>
                  <a href="/#materials">Materiais</a>
                </li>
                <li>
                  <a href="/#training-programs">Treinamentos</a>
                </li>
              </ul>
            </div>
          )}

          {backButton && setLayout && <button className="bton btn-ghost btn-circle" onClick={() => setLayout("default")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ transform: "rotate(-180deg) translateX(-11px)" }}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>}

          {!icons && (
            <div className="ml-2">
              <a className="btn btn-ghost text-xl p-0">
                <LogoIcon />
                <LogoText className="hidden sm:block" />
              </a>
            </div>
          )}
        </div>

        {/* Logo centralizado */}
        <div className={`${icons ? "navbar-center" : "hidden"}`}>
          <a className="btn btn-ghost text-xl p-0">
            <LogoIcon />
            <LogoText className="hidden sm:block" />
          </a>
        </div>

        {/* Ícones e controle de tema */}
        <div className={`navbar-end space-x-2 ${icons ? "" : "hidden"}`}>
          <div className="hidden sm:flex">
            <div className="tooltip tooltip-left" data-tip="Nosso instagram">
              <button className="btn btn-ghost btn-circle">
                <InstagramIcon />
              </button>
            </div>
            <div className="flex items-center justify-center">
              <ThemeController />
            </div>
          </div>
          <div className="sm:hidden">
            <ThemeController />
          </div>
        </div>
      </div>
    </div>
  );
};
