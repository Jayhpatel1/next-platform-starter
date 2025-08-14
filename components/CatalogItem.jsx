import Image from 'next/image';

export default function CatalogItem({ item }) {
	return (
		<div className="flex flex-col overflow-hidden transition border rounded-md bg-neutral-900/40 border-neutral-700 hover:shadow">
			<div className="relative w-full h-40">
				<img src={item.img} alt={item.name} className="object-cover w-full h-full" />
			</div>
			<div className="p-3">
				<h3 className="text-lg font-semibold">{item.name}</h3>
				<p className="text-sm opacity-80">{Array.isArray(item.items) ? item.items.join(', ') : ''}</p>
			</div>
		</div>
	);
}