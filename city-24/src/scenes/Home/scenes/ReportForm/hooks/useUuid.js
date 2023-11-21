import { useLocalStorage } from "@mantine/hooks";

export const useUuid = () => {
    const [uuid] = useLocalStorage({ key: "uuid", defaultValue: crypto.randomUUID() });
    return uuid;
};
