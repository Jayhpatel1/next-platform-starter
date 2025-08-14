"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { useMemo } from "react";
import GoalSuggest from "./GoalSuggest";

export default function ControlPage() {
	const weightData = useMemo(
		() => Array.from({ length: 12 }).map((_, m) => ({ month: m + 1, kg: 70 + Math.sin(m) * 2 })),
		[]
	);
	const energyData = useMemo(
		() => Array.from({ length: 12 }).map((_, m) => ({ month: m + 1, score: 60 + Math.cos(m) * 10 })),
		[]
	);
	return (
		<div className="mx-auto max-w-6xl px-4 py-8">
			<h2 className="text-2xl font-semibold mb-4">Control Panel</h2>
			<div className="grid md:grid-cols-2 gap-6">
				<div className="border border-white/10 rounded p-3">
					<h3 className="font-medium mb-2">Mass (kg)</h3>
					<div className="h-60">
						<ResponsiveContainer width="100%" height="100%">
							<LineChart data={weightData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
								<CartesianGrid strokeDasharray="3 3" stroke="#ffffff22" />
								<XAxis dataKey="month" stroke="#94a3b8" />
								<YAxis stroke="#94a3b8" />
								<Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155" }} />
								<Line type="monotone" dataKey="kg" stroke="#16a34a" strokeWidth={2} dot={false} />
							</LineChart>
						</ResponsiveContainer>
					</div>
				</div>
				<div className="border border-white/10 rounded p-3">
					<h3 className="font-medium mb-2">Vitality</h3>
					<div className="h-60">
						<ResponsiveContainer width="100%" height="100%">
							<LineChart data={energyData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
								<CartesianGrid strokeDasharray="3 3" stroke="#ffffff22" />
								<XAxis dataKey="month" stroke="#94a3b8" />
								<YAxis stroke="#94a3b8" />
								<Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155" }} />
								<Line type="monotone" dataKey="score" stroke="#f59e0b" strokeWidth={2} dot={false} />
							</LineChart>
						</ResponsiveContainer>
					</div>
				</div>
			</div>
			<GoalSuggest />
		</div>
	);
}