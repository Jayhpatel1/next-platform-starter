"use client";
import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { saveDocument, loadDocument } from '../../utils/firebase';

export default function ControlPage() {
	const [weight, setWeight] = useState('70');
	const [vitality, setVitality] = useState('7');
	const [data, setData] = useState([]);
	const [status, setStatus] = useState('');

	useEffect(() => {
		(async () => {
			const saved = await loadDocument('metrics/user');
			if (saved?.entries) setData(saved.entries);
		})();
	}, []);

	async function addEntry() {
		const entry = { t: new Date().toLocaleDateString(), weight: Number(weight), vitality: Number(vitality) };
		const next = [...data, entry].slice(-20);
		setData(next);
		await saveDocument('metrics/user', { entries: next });
		setStatus('Saved');
		setTimeout(() => setStatus(''), 1200);
	}

	return (
		<div className="flex flex-col gap-6">
			<h1>Control Panel</h1>
			<p className="opacity-80">Track your metrics. Data is stored locally and in Firestore.</p>
			<div className="grid items-end grid-cols-2 gap-3 sm:grid-cols-4">
				<div>
					<label className="text-sm">Mass (kg)</label>
					<input className="input" value={weight} onChange={(e)=>setWeight(e.target.value)} />
				</div>
				<div>
					<label className="text-sm">Vitality (1-10)</label>
					<input className="input" value={vitality} onChange={(e)=>setVitality(e.target.value)} />
				</div>
				<button className="btn" onClick={addEntry}>Add Entry</button>
				{status && <div role="status" className="text-sm">{status}</div>}
			</div>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div className="h-64 p-3 border rounded bg-neutral-900/40 border-neutral-700">
					<h3 className="mb-2">Mass Over Time</h3>
					<ResponsiveContainer width="100%" height="90%">
						<LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
							<CartesianGrid strokeDasharray="3 3" stroke="#333" />
							<XAxis dataKey="t" stroke="#aaa" />
							<YAxis stroke="#aaa" />
							<Tooltip />
							<Line type="monotone" dataKey="weight" stroke="#16a34a" strokeWidth={2} dot={false} />
						</LineChart>
					</ResponsiveContainer>
				</div>
				<div className="h-64 p-3 border rounded bg-neutral-900/40 border-neutral-700">
					<h3 className="mb-2">Vitality Over Time</h3>
					<ResponsiveContainer width="100%" height="90%">
						<LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
							<CartesianGrid strokeDasharray="3 3" stroke="#333" />
							<XAxis dataKey="t" stroke="#aaa" />
							<YAxis domain={[0, 10]} stroke="#aaa" />
							<Tooltip />
							<Line type="monotone" dataKey="vitality" stroke="#22d3ee" strokeWidth={2} dot={false} />
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	);
}