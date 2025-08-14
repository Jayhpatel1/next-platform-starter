"use client";
import catalog from "@/data/catalog.json";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { saveProcurement } from "../../lib/firestore";

interface ProcureForm {
	frequency: "ad-hoc" | "daily" | "weekly" | "monthly" | "annual";
	items: string[];
}

export default function ProcurePage() {
	const { register, handleSubmit } = useForm<ProcureForm>({
		defaultValues: { frequency: "ad-hoc", items: [] },
	});
	const [result, setResult] = useState<string | null>(null);

	const onSubmit = async (data: ProcureForm) => {
		const total = data.items.length * 199;
		const fakeTxnId = `txn_${Math.random().toString(36).slice(2, 10)}`;
		await saveProcurement({ items: data.items, frequency: data.frequency, total, txnId: fakeTxnId });
		setResult(`Simulated payment success: ${fakeTxnId} · Items: ${data.items.length} · Total ₹${total}`);
	};

	return (
		<div className="mx-auto max-w-6xl px-4 py-8">
			<h2 className="text-2xl font-semibold mb-4">Procure</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<div className="flex gap-3 items-center">
					<label className="opacity-80 text-sm">Frequency</label>
					<select {...register("frequency")} className="bg-white/10 rounded px-3 py-2">
						<option value="ad-hoc">Ad-hoc</option>
						<option value="daily">Daily</option>
						<option value="weekly">Weekly</option>
						<option value="monthly">Monthly</option>
						<option value="annual">Annual</option>
					</select>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
					{catalog.map((i) => (
						<label key={i.id} className="flex items-start gap-2 border border-white/10 rounded p-3 cursor-pointer">
							<input type="checkbox" value={i.id} {...register("items")} />
							<div>
								<p className="font-medium">{i.name}</p>
								<p className="opacity-80 text-sm">{i.category}</p>
							</div>
						</label>
					))}
				</div>
				<button type="submit" className="bg-verdant text-white rounded px-4 py-2">Simulate Checkout</button>
			</form>
			{result && (
				<div className="mt-4 p-3 border border-white/10 rounded bg-white/5">
					{result}
				</div>
			)}
		</div>
	);
}