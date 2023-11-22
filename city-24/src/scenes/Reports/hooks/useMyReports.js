import { useEffect, useState } from "react";
import { useUuid } from "../../../hooks";

export const useMyReports = () => {
    const uuid = useUuid();
    const [reports, setReports] = useState([]);

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
                const data = await response.json();
                setReports(data);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, [uuid]);

    return reports;
};
