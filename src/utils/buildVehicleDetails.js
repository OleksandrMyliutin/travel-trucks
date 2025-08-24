const HUMAN_FORM = {
    alcove: "Alcove",
    panelTruck: "Panel truck",
    fullyIntegrated: "Fully Integrated",
};

const withSpaces = (v) =>
    typeof v === "string"
        ? v
            .replace(/(\d)([a-zA-Z])/g, "$1 $2")
            .replace(/([a-zA-Z])(\d)/g, "$1 $2")
        : v ?? "—";

export const buildVehicleDetails = (p = {}) => [
    ["Form", HUMAN_FORM[p.form] ?? p.form ?? "—"],
    ["Length", withSpaces(p.length)],
    ["Width", withSpaces(p.width)],
    ["Height", withSpaces(p.height)],
    ["Tank", withSpaces(p.tank)],
    ["Consumption", withSpaces(p.consumption)],
];