import { InstagramIcon } from "./InstagramIcon";
import { LogoIcon, LogoText, LogoTextLink } from "./Logo";
import { ThemeController } from "./ThemeController";

export const NavBar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
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
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">
            <LogoIcon />
            <LogoText />
          </a>
        </div>
        <div className="navbar-end">
          <div className="tooltip tooltip-left" data-tip={`Nosso instagram.`}>
            <button className="btn btn-ghost btn-circle">
              <InstagramIcon />
            </button>
          </div>
          <div className="flex items-center justify-center">
            <ThemeController />
          </div>
        </div>
      </div>
    </div>
  );
};

export const NavBarA = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1 space-x-1">
        <LogoIcon />
        <LogoTextLink />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-base">
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
          <li className="flex items-center justify-center">
            <ThemeController />
          </li>
        </ul>
      </div>
    </div>
  );
};
