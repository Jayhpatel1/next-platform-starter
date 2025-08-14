export function suggestOfferings(objective, catalog) {
	if (!objective) return [];
	const lower = objective.toLowerCase();
	const results = [];
	const add = (cat, filterFn = () => true) => {
		const items = catalog[cat] || [];
		items.filter(filterFn).forEach((i) => results.push({ ...i, category: cat }));
	};
	if (lower.includes('mass reduction') || lower.includes('weight loss') || lower.includes('fat')) {
		add('Vision', (i) => i.calorieProfile === 'hypo');
		add('Holistic Wellness');
	}
	if (lower.includes('mass gain') || lower.includes('muscle') || lower.includes('augmentation')) {
		add('Musculoskeletal');
		add('Enhanced Bespoke', (i) => /anabolic|protein|osseous/i.test(i.name));
	}
	if (lower.includes('follicle') || lower.includes('hair')) {
		add('Enhanced Bespoke', (i) => /Follicle/i.test(i.name));
	}
	if (lower.includes('vision') || lower.includes('sight')) {
		add('Vision');
	}
	if (lower.includes('cardio') || lower.includes('heart')) {
		add('Cardiovascular');
	}
	if (lower.includes('immunity') || lower.includes('immune')) {
		add('Immunity');
	}
	if (lower.includes('respiratory') || lower.includes('lung')) {
		add('Respiratory');
	}
	if (lower.includes('hormone') || lower.includes('vigor')) {
		add('Hormonal & Vigor');
	}
	if (lower.includes('glucose') || lower.includes('hypertension') || lower.includes('neoplasia') || lower.includes('cancer')) {
		add('Holistic Wellness');
	}
	// Deduplicate by name
	const seen = new Set();
	return results.filter((r) => (seen.has(r.name) ? false : (seen.add(r.name), true))).slice(0, 12);
}