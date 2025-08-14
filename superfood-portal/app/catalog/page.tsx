import catalog from "@/data/catalog.json";
import Image from "next/image";
import Link from "next/link";

export default function CatalogPage() {
	const categories = Array.from(new Set(catalog.map((i) => i.category)));
	return (
		<div className="mx-auto max-w-6xl px-4 py-8">
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-2xl font-semibold">Catalog</h2>
				<Link href="/procure" className="bg-citrus text-black rounded px-3 py-2">Build Bundle</Link>
			</div>
			<div className="flex gap-2 overflow-x-auto pb-2 mb-4">
				{categories.map((c) => (
					<span key={c} className="px-3 py-1 rounded-full bg-white/10 text-sm whitespace-nowrap">{c}</span>
				))}
			</div>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{catalog.map((item) => (
					<div key={item.id} className="rounded border border-white/10 overflow-hidden">
						<Image src={`https://source.unsplash.com/random/600x400/?${encodeURIComponent(item.name)}`} alt={item.name} width={600} height={400} className="w-full h-40 object-cover" />
						<div className="p-3">
							<h3 className="font-semibold">{item.name}</h3>
							<p className="text-sm opacity-80">{item.ingredients.join(", ")}</p>
							<div className="mt-2 flex items-center justify-between text-sm">
								<span className="verdant">{item.category}</span>
								<span className="opacity-80">{item.type}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}