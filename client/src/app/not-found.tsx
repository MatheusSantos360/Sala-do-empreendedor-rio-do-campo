import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="text-center">
        <div className="text-8xl font-bold text-blue-400 mb-4">404</div>

        <h1 className="text-4xl font-bold mb-4">Página não encontrada</h1>

        <p className="text-lg text-gray-600 mb-8">Oops! Parece que você tentou acessar uma página que não existe.</p>

        <Link href="/" className="btn btn-primary">
          Voltar à página inicial
        </Link>
      </div>
    </div>
  );
}
