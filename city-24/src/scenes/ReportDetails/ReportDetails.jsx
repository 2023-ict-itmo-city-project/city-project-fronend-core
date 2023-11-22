import { Box, Card, Image, Text, Badge, Group, Anchor } from "@mantine/core";
import React from "react";

import classes from "./ReportDetails.module.css";
import { useParams } from "react-router-dom";
import { useReport } from "./hooks";

export const ReportDetails = () => {
    let { id } = useParams();
    const report = useReport(id);

    // @ts-ignore
    const url = import.meta.env.VITE_BACKEND_URL;
    return (
        <Box maw={600} mx="auto" className={classes.details} mb="md">
            {report && (
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
                        <Image
                            src={`${url}/api/v0/issues/${report.id}/downloadFile`}
                            alt="Фото обращения"
                            fallbackSrc="https://placehold.co/300x200?text=Placeholder"
                        />
                    </Card.Section>
                    <Group justify="space-between" mt="md">
                        <Text fw={500}>Категория: {report.category}</Text>
                        <Badge color="pink" variant="light">
                            {report.status}
                        </Badge>
                    </Group>
                    {report.description && (
                        <Text size="sm" mt="sm">
                            Описание: {report.description}
                        </Text>
                    )}

                    {/* <Text size="sm" mt="sm">
                      Месторасположение: {report.location.lat}, {report.location.lon}
                    </Text>  */}

                    <Anchor
                        size="sm"
                        c="inherit"
                        underline="always"
                        mt="sm"
                        href={`https://www.google.com/maps/search/?api=1&query=${report.location.lat},${report.location.lon}`}
                    >
                        Посмотреть место на карте
                    </Anchor>

                    <Text size="sm" mt="sm" mb="xs">
                        Дата обращения: {report.date}
                    </Text>
                </Card>
            )}
        </Box>
    );
};
