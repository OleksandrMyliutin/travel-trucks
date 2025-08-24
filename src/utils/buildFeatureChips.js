import PetrolIcon from "../assets/icons/Petrol.svg";
import { CATEGORIES } from "./categories";

const engineIcon = (engine) => {
    switch ((engine || "").toLowerCase()) {
        default: return PetrolIcon;
    }
};

const cap = (s = "") => s.charAt(0).toUpperCase() + s.slice(1);

export const buildFeatureChips = (product = {}) => {
    const chips = [];

    Object.entries(CATEGORIES).forEach(([key, meta]) => {
        const val = product[key];
        if (val === false || val === null || val === undefined) return;

        if (key === "transmission") {
        if (String(val).toLowerCase() !== "automatic") return;
        chips.push({ icon: meta.icon, label: meta.label });
        return;
        }

        if (key === "engine") {
        chips.push({ icon: engineIcon(val), label: cap(String(val)) });
        return;
        }

        if (typeof val === "boolean" && val) {
        chips.push({ icon: meta.icon, label: meta.label });
        return;
        }

        if (typeof val === "string" || typeof val === "number") {
        chips.push({ icon: meta.icon, label: meta.label });
        }
    });

    return chips;
};
