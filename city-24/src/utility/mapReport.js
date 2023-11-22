import { categoryIdObj } from "../categories";
import { statusObj } from "../scenes";
import { unixToDate } from "./unixToDate";

export const mapReports = (reports) => {
    return reports.map(({ status, createdAt, categoryId, ...rest }) => ({
        category: categoryIdObj[categoryId],
        date: unixToDate(createdAt),
        status: statusObj[status],
        ...rest,
    }));
};
