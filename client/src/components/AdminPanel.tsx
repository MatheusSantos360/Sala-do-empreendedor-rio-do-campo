import { Layouts } from "@/app/admin/page";
import { Admin } from "@/types";
import Image from "next/image";
import { FC } from "react";
import { Materials } from "./Materials";

export const AdminPanel: FC<{ admin: Admin, section: Layouts, setLayout: (layout: Layouts) => void }> = ({ admin, section, setLayout }) => {
  const props = { admin, setLayout}
  return (
    <div>
      {section === "default" && <DefaultLayout {...props} />}
      {section === "materials" && <MaterialsLayout {...props} />}
      {section === "slider" && <SliderLayout {...props} />}
    </div>
  );
};

const DefaultLayout: FC<{ admin: Admin, setLayout: (layout: Layouts) => void }> = ({ admin, setLayout }) => {
  return (
    <section className="px-4">
      <div className="flex items-center justify-center my-14">
        <div className="avatar mr-5">
          <div className="mask mask-squircle w-24">
            <Image src="/Avatar.png" alt="" width={1000} height={1000} />
          </div>
        </div>
        <h1 className="text-3xl font-bold">Olá {admin.name}!</h1>
      </div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="card overflow-hidden rounded-lg shadow-lg order-2 lg:order-1">
            <Image
              src="/entrepreneur-writing.jpg"
              alt="Imagem ilustrativa da Sala do Empreendedor"
              width={3000}
              height={3000}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="card bg-base-200 p-6 md:p-8 rounded-lg shadow-md order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-primary">Materiais</h2>
            <p className="text-base-content opacity-90 text-center leading-relaxed">
              Administrar os Cards da seção <span className="font-semibold text-primary">Materiais</span>
            </p>
            <button className="btn w-32 btn-primary mt-4 mx-auto" onClick={() => setLayout("materials")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Materiais
            </button>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="card overflow-hidden rounded-lg shadow-lg order-2 lg:order-1">
            <Image
              src="/entrepreneur-writing.jpg"
              alt="Imagem ilustrativa da Sala do Empreendedor"
              width={3000}
              height={3000}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="card bg-base-200 p-6 md:p-8 rounded-lg shadow-md order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-primary">Slider</h2>
            <p className="text-base-content opacity-90 text-center leading-relaxed">
              Administrar os slides do <span className="font-semibold text-primary">Slider</span>, na seção{" "}
              <span className="font-semibold text-primary">Capacitações e treinamentos</span>
            </p>
            <button className="btn w-32 btn-primary mt-4 mx-auto" onClick={() => setLayout("slider")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Slider
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const MaterialsLayout: FC<{ admin: Admin }> = () => {
  return (
    <Materials edit />
  );
}

const SliderLayout: FC<{ admin: Admin }> = () => { 
  return <div>Slider</div>
}