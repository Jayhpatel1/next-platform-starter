import Image from "next/image";

export interface CatalogItemProps {
	id: string;
	name: string;
	category: string;
	type: string;
	ingredients: string[];
}

export default function CatalogItem({ name, category, type, ingredients }: CatalogItemProps) {
	return (
		<div className="rounded border border-white/10 overflow-hidden">
			<Image src={`https://source.unsplash.com/random/600x400/?${encodeURIComponent(name)}`} alt={name} width={600} height={400} className="w-full h-40 object-cover" />
			<div className="p-3">
				<h3 className="font-semibold">{name}</h3>
				<p className="text-sm opacity-80">{ingredients.join(", ")}</p>
				<div className="mt-2 flex items-center justify-between text-sm">
					<span className="verdant">{category}</span>
					<span className="opacity-80">{type}</span>
				</div>
			</div>
		</div>
	);
}