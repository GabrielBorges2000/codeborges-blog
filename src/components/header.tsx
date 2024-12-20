import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-zinc-100 shadow-md mb-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<Link
							href="/"
							className="flex items-center gap-2 hover:text-zinc-700 transition-colors"
						>
							<Image
								src="/assets/logo.png"
								alt="Codeborges"
								width={50}
								height={50}
								className="rounded-full"
							/>
							<span className="text-2xl font-bold">Codeborges</span>
						</Link>
					</div>
					<nav className="md:flex space-x-10">
						<Link
							href="/"
							className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors"
						>
							Inicio
						</Link>
						{/* <Link
							href="/blog"
							className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors"
						>
							Blog
						</Link>
						<Link
							href="/about"
							className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors"
						>
							Sobre
						</Link>
						<Link
							href="/contact"
							className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors"
						>
							Contato
						</Link> */}
					</nav>
					{/* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
						<a
							href="#"
							className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
						>
							Inscrever-se
						</a>
					</div>
					<div className="-mr-2 -my-2 md:hidden">
						<button
							type="button"
							className="bg-zinc-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
							aria-expanded="false"
						>
							<span className="sr-only">Abrir menu</span>
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div> */}
				</div>
			</div>
		</header>
	);
}
