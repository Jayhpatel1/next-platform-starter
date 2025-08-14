"use client";
import { useState } from 'react';
import Link from 'next/link';
import catalog from '../../data/catalog.json';
import { saveDocument } from '../../utils/firebase';
import { suggestOfferings } from '../../components/Suggestions';

const bundles = [
	{ id: 'adhoc', label: 'Ad-hoc', multiplier: 1 },
	{ id: 'daily', label: 'Daily', multiplier: 7 },
	{ id: 'weekly', label: 'Weekly', multiplier: 7 },
	{ id: 'monthly', label: 'Monthly', multiplier: 30 },
	{ id: 'annual', label: 'Annual', multiplier: 365 }
];

export default function ProcurePage() {
	const [objective, setObjective] = useState('mass reduction');
	const [bundle, setBundle] = useState('weekly');
	const [items, setItems] = useState(suggestOfferings(objective, catalog));
	const [status, setStatus] = useState('');

	function handleObjectiveChange(val) {
		setObjective(val);
		setItems(suggestOfferings(val, catalog));
	}

	async function checkout() {
		setStatus('Processing...');
		const id = 'txn_' + Math.random().toString(36).slice(2, 10);
		await new Promise((r) => setTimeout(r, 800));
		await saveDocument('procurements/' + id, {
			id,
			objective,
			bundle,
			items,
			amount: Math.round(items.length * 149 * (bundles.find((b) => b.id === bundle)?.multiplier || 1)),
			createdAt: Date.now()
		});
		setStatus('Success! Transaction simulated with id ' + id);
	}

	return (
		<div className="flex flex-col gap-6">
			<h1>Procure</h1>
			<label className="text-sm">Objective</label>
			<input className="input" value={objective} onChange={(e) => handleObjectiveChange(e.target.value)} placeholder="e.g., mass reduction, follicle retention" />
			<label className="text-sm">Bundle</label>
			<select className="input" value={bundle} onChange={(e) => setBundle(e.target.value)}>
				{bundles.map((b) => (
					<option key={b.id} value={b.id}>{b.label}</option>
				))}
			</select>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
				{items.map((i, idx) => (
					<div key={idx} className="p-3 border rounded bg-neutral-900/40 border-neutral-700">
						<div className="mb-2 font-semibold">{i.name} <span className="ml-2 text-xs opacity-70">[{i.category}]</span></div>
						<div className="text-sm opacity-80">{i.items?.join(', ')}</div>
					</div>
				))}
			</div>
			<button className="btn btn-lg" onClick={checkout}>Simulate Checkout</button>
			{status && <div role="status" className="text-sm">{status}</div>}
			<p className="text-sm opacity-80">Payments are simulated. Replace with Stripe for production.</p>
		</div>
	);
}