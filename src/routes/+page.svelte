<div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
	<div class="container mx-auto px-4 py-16">
		<header class="text-center mb-16">
			<h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
				Welcome to My Portfolio
			</h1>
			<p class="text-xl text-slate-300">
				Built with TypeScript, Svelte, Bun, and Tailwind CSS
			</p>
		</header>

		<main class="max-w-4xl mx-auto">
			<section class="mb-12">
				<h2 class="text-3xl font-semibold mb-6">About Me</h2>
				<div class="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700">
					<p class="text-slate-300 leading-relaxed">
						This is a modern portfolio website showcasing the power of TypeScript, Svelte, and Tailwind CSS.
						The project uses Bun as the runtime and package manager for blazing-fast performance.
					</p>
				</div>
			</section>

			<section class="mb-12">
				<h2 class="text-3xl font-semibold mb-6">Tech Stack</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div class="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700 hover:border-blue-500 transition-colors">
						<h3 class="text-xl font-semibold mb-2 text-blue-400">TypeScript</h3>
						<p class="text-slate-300">Type-safe JavaScript for better development experience</p>
					</div>
					<div class="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700 hover:border-purple-500 transition-colors">
						<h3 class="text-xl font-semibold mb-2 text-purple-400">Svelte</h3>
						<p class="text-slate-300">Modern, reactive framework with excellent performance</p>
					</div>
					<div class="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700 hover:border-green-500 transition-colors">
						<h3 class="text-xl font-semibold mb-2 text-green-400">Bun</h3>
						<p class="text-slate-300">Fast all-in-one JavaScript runtime and package manager</p>
					</div>
					<div class="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700 hover:border-cyan-500 transition-colors">
						<h3 class="text-xl font-semibold mb-2 text-cyan-400">Tailwind CSS</h3>
						<p class="text-slate-300">Utility-first CSS framework for rapid UI development</p>
					</div>
				</div>
			</section>

			<section>
				<h2 class="text-3xl font-semibold mb-6">Get Started</h2>
				<div class="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700">
					<p class="text-slate-300 mb-4">Ready to customize this portfolio? Here's how to get started:</p>
					<ol class="list-decimal list-inside space-y-2 text-slate-300">
						<li>Edit the content in <code class="bg-slate-900 px-2 py-1 rounded">src/routes/+page.svelte</code></li>
						<li>Add your projects and experience</li>
						<li>Customize the styling with Tailwind classes</li>
						<li>Deploy to your favorite hosting platform</li>
					</ol>
				</div>
			</section>
		</main>

		<footer class="text-center mt-16 text-slate-400">
			<p>Built with ❤️ using modern web technologies</p>
		</footer>
	</div>
</div>
