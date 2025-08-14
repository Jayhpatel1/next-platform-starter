import catalog from "@/data/catalog.json";

type Goal = "mass reduction" | "mass augmentation" | "follicle retention" | "visual acuity improvement" | "cardiovascular support" | "immunity fortification" | "respiratory vitality" | "musculoskeletal strength" | "cognitive optimization" | "hormonal balance" | "holistic wellness";

export function suggestOfferings(goal: Goal) {
	const lower = goal.toLowerCase();
	if (lower.includes("reduction")) {
		return catalog.filter((i) => /Blend|Extract/.test(i.type) && !i.ingredients.some((x) => ["mollusc","salmon","cottage"].includes(x)));
	}
	if (lower.includes("augmentation")) {
		return catalog.filter((i) => i.ingredients.some((x) => ["ovum","curd","amygdali","nuts","avena"].includes(x)));
	}
	if (lower.includes("follicle")) {
		return catalog.filter((i) => i.name.includes("Follicle") || i.ingredients.some((x) => ["ovum","nuts","germinants"].includes(x)));
	}
	if (lower.includes("visual") || lower.includes("vision")) {
		return catalog.filter((i) => i.category === "Vision");
	}
	if (lower.includes("cardio")) {
		return catalog.filter((i) => i.category === "Cardiovascular");
	}
	if (lower.includes("immunity")) {
		return catalog.filter((i) => i.category === "Immunity");
	}
	if (lower.includes("respiratory")) {
		return catalog.filter((i) => i.category === "Respiratory");
	}
	if (lower.includes("musculoskeletal")) {
		return catalog.filter((i) => i.category === "Musculoskeletal");
	}
	if (lower.includes("cognitive")) {
		return catalog.filter((i) => i.category === "Cognitive");
	}
	if (lower.includes("hormonal") || lower.includes("vigor")) {
		return catalog.filter((i) => i.category === "Hormonal & Vigor");
	}
	return catalog;
}