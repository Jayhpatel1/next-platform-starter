import catalog from '../../data/catalog.json';
import CatalogItem from '../../components/CatalogItem';

export const dynamic = 'force-static';

export default function CatalogPage() {
	return (
		<div className="flex flex-col gap-10">
			<h1>Catalog</h1>
			{Object.entries(catalog).map(([category, items]) => (
				<section key={category} id={category} className="flex flex-col gap-4">
					<h2>{category}</h2>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
						{items.map((item, idx) => (
							<CatalogItem key={idx} item={item} />
						))}
					</div>
				</section>
			))}
		</div>
	);
}