import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-zinc-950 border-t border-neutral-200 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="col-span-1 md:col-span-2">
						<h3 className="text-3xl font-bold tracking-tighter">Codeborges</h3>
						<p className="mt-4 text-sm text-gray-400">
							Compartilhando conhecimento e experiências no mundo do
							desenvolvimento.
						</p>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="hover:text-gray-300 transition-colors"
								>
									Inicio
								</Link>
							</li>
							{/* <li>
								<Link
									href="/blog"
									className="hover:text-gray-300 transition-colors"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="hover:text-gray-300 transition-colors"
								>
									Sobre
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:text-gray-300 transition-colors"
								>
									Contato
								</Link>
							</li> */}
						</ul>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="https://github.com/GabrielBorges2000"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-gray-300 transition-colors"
								>
									GitHub
								</a>
							</li>
							<li>
								<a
									href="https://linkedin.com/in/GabrielBorges2000"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-gray-300 transition-colors"
								>
									LinkedIn
								</a>
							</li>
							<li>
								<a
									href="https://portfolio.codeborges.com.br/"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-gray-300 transition-colors"
								>
									Portfólio
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-gray-800 py-6 text-sm text-center text-gray-400">
					© {new Date().getFullYear()} Codeborges. Todos os direitos reservados.
				</div>
			</div>
		</footer>
	);
}
