import { objectFlip } from "./utility";

export const categoryObj = {
    "🗑️ Мусор": 1,
    "❄ Осадки": 2,
    "⚠ Опасность": 3,
    "✨ Другое": 4,
};

export const categoryIdObj = objectFlip(categoryObj);
