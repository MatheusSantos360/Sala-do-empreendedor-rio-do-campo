import { LogoIcon, LogoTextLink } from "./Logo";
import { ThemeController } from "./ThemeController";

export const NavBar = () => {
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
