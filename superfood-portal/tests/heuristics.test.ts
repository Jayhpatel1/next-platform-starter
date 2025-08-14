import { suggestOfferings } from "@/app/utils/heuristics";

describe('suggestOfferings', () => {
	it('prioritizes blends/extracts for mass reduction', () => {
		const results = suggestOfferings('mass reduction');
		expect(results.length).toBeGreaterThan(0);
		for (const r of results) {
			expect(["Blend","Extract"]).toContain(r.type);
		}
	});
	it('returns vision items for visual acuity improvement', () => {
		const results = suggestOfferings('visual acuity improvement');
		expect(results.every(r => r.category === 'Vision')).toBe(true);
	});
});