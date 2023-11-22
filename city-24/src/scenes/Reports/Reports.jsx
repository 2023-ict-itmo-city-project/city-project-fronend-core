import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group, Box } from "@mantine/core";

import { useMyReports } from "./hooks";
import classes from "./Reports.module.css";
import { statusObj } from "./statuses";
import { categoryIdObj } from "../../categories";
import { useUuid } from "../../hooks";
import { unixToDate } from "./utility";

export const Reports = () => {
    let navigate = useNavigate();
    const routeChange = (id) => {
        let path = `/details/${id}`;
        navigate(path);
    };

    const [reports, setReports] = useState([]);
    const uuid = useUuid();
    const data = useMyReports();

    useEffect(() => {
        const processedData = data.map(({ status, createdAt, categoryId, ...rest }) => ({
            category: categoryIdObj[categoryId],
            date: unixToDate(createdAt),
            status: statusObj[status],
            ...rest,
        }));

        setReports(processedData);
    }, [uuid, data]);

    console.log("reports", reports);

    return (
        <Box maw={600} mx="auto" className={classes.reports} pt="xs">
            {reports.map((report) => (
                <Card
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    mx="xs"
                    withBorder
                    key={report.id}
                    mt="md"
                >
                    <Card.Section>
                        <Image src={report.documentPath} alt="Фото обращения" />
                    </Card.Section>

                    <Group justify="space-between" mt="md">
                        <Text fw={500}>Категория: {report.category}</Text>
                        <Badge color="pink" variant="light">
                            {report.status}
                        </Badge>
                    </Group>

                    <Text size="sm" mt="sm" mb="xs">
                        Дата обращения: {report.date}
                    </Text>
                    <Button fullWidth mt="md" radius="md" onClick={() => routeChange(report.id)}>
                        Детали обращения
                    </Button>
                </Card>
            ))}
        </Box>
    );
};
