import { suggestOfferings } from '../../components/Suggestions';
import catalog from '../../data/catalog.json';

describe('suggestOfferings', () => {
	test('mass reduction suggests hypo and holistic', () => {
		const out = suggestOfferings('mass reduction', catalog as any);
		expect(out.length).toBeGreaterThan(0);
		expect(out.some((i:any)=>i.category==='Holistic Wellness')).toBeTruthy();
	});
	
	test('vision objective pulls Vision', () => {
		const out = suggestOfferings('vision improvement', catalog as any);
		expect(out.some((i:any)=>i.category==='Vision')).toBeTruthy();
	});
});