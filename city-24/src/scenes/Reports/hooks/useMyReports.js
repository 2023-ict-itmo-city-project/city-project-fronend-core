import { useEffect } from "react";
import { useUuid } from "../../Home/scenes/ReportForm/hooks";

export const useMyReports = () => {
    const uuid = useUuid();
    useEffect(() => {
        // @ts-ignore
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/v0/issues/my`;

        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "X-User-UUID": uuid,
                    },
                });
                const json = await response.json();
                console.log(json);
                return json;
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [uuid]);

    return;
};
