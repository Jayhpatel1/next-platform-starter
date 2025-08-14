import Link from 'next/link';

export default function Page() {
	return (
		<div className="flex flex-col gap-12 sm:gap-16">
			<section className="flex flex-col gap-4 text-center">
				<h1>The Super Food AI</h1>
				<p className="text-lg opacity-90">Super Food for Super Humans</p>
				<div className="flex justify-center gap-3">
					<Link href="/catalog" className="btn btn-lg">Explore Catalog</Link>
					<Link href="/procure" className="btn btn-lg">Procure</Link>
				</div>
			</section>
			<section className="flex flex-col gap-4">
				<h2>Discover Wellness Categories</h2>
				<div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
					{['Vision','Cardiovascular','Immunity','Respiratory','Musculoskeletal','Cognitive','Hormonal & Vigor','Holistic Wellness'].map((c)=> (
						<Link key={c} href={`/catalog#${encodeURIComponent(c)}`} className="flex items-center justify-center h-24 font-semibold border rounded bg-neutral-900/50 border-neutral-700">{c}</Link>
					))}
				</div>
			</section>
		</div>
	);
}
