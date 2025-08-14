"use client";
import { useMemo, useState } from "react";
import { suggestOfferings } from "../utils/heuristics";
import CatalogItem from "../(components)/CatalogItem";

const GOALS = [
	"mass reduction",
	"mass augmentation",
	"follicle retention",
	"visual acuity improvement",
	"cardiovascular support",
	"immunity fortification",
	"respiratory vitality",
	"musculoskeletal strength",
	"cognitive optimization",
	"hormonal balance",
	"holistic wellness",
] as const;

type Goal = typeof GOALS[number];

export default function GoalSuggest() {
	const [goal, setGoal] = useState<Goal>(GOALS[0]);
	const items = useMemo(() => suggestOfferings(goal), [goal]);
	return (
		<div className="mt-8">
			<div className="flex items-center gap-3 mb-3">
				<label className="text-sm opacity-80" htmlFor="goal">Objective</label>
				<select id="goal" className="bg-white/10 rounded px-3 py-2" value={goal} onChange={(e) => setGoal(e.target.value as Goal)}>
					{GOALS.map((g) => (
						<option key={g} value={g}>{g}</option>
					))}
				</select>
			</div>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{items.slice(0, 6).map((i) => (
					<CatalogItem key={i.id} {...i as any} />
				))}
			</div>
		</div>
	);
}