import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group, Box } from "@mantine/core";
import { useMyReports } from "./hooks";

export const Reports = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/details`;
        navigate(path);
    };

    return (
        <Box maw={500} mx="auto" mt="xl">
            <Card shadow="sm" padding="lg" radius="md" mx="xs" withBorder>
                <Card.Section>
                    <Image
                        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                        height={160}
                        alt="Norway"
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Категория+дата</Text>
                    <Badge color="pink" variant="light">
                        Статус
                    </Badge>
                </Group>

                <Text size="sm" c="dimmed">
                    описание
                </Text>

                <Button
                    variant="light"
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    onClick={routeChange}
                >
                    Детали обращения
                </Button>
            </Card>
        </Box>
    );
};
