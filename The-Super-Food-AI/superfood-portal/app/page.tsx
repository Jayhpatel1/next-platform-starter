import Image from "next/image";

export default function Home() {
	return (
		<section className="mx-auto max-w-6xl px-4 py-10">
			<div className="grid md:grid-cols-2 gap-8 items-center">
				<div>
					<h1 className="text-4xl md:text-5xl font-bold leading-tight">
						<span className="verdant">The Super Food AI</span>
					</h1>
					<p className="mt-3 text-lg opacity-90">Super Food for Super Humans</p>
					<p className="mt-4 max-w-prose">Tailored nourishment catalogs and wellness tooling for vision, cardio, immunity, respiratory vitality, musculoskeletal strength, cognitive optimization, hormonal balance & vigor, and holistic wellness.</p>
					<div className="mt-6 flex gap-4">
						<a href="/catalog" className="bg-verdant text-white rounded px-4 py-2">Explore Catalog</a>
						<a href="/procure" className="bg-citrus text-black rounded px-4 py-2">Procure Now</a>
					</div>
				</div>
				<div className="grid grid-cols-3 gap-2">
					{Array.from({ length: 6 }).map((_, idx) => (
						<img
							key={idx}
							src={`https://source.unsplash.com/random/300x20${idx}?nourish,health,greens`}
							alt="Super Food visual"
							className="w-full h-28 object-cover rounded"
						/>
					))}
				</div>
			</div>
		</section>
	);
}
