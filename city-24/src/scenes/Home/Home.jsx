import React from "react";
import { Container, Title, Text, Button, BackgroundImage, Stack } from "@mantine/core";

import { useScrollIntoView } from "@mantine/hooks";
import { ReportForm } from "./scenes/ReportForm";
import gorod from "../../../src/assets/gorod24-background.webp";

import classes from "./Home.module.css";

export const Home = () => {
    const { scrollIntoView, targetRef } = useScrollIntoView({
        offset: 60,
    });
    return (
        <Container>
            <Container>
                <Container className={classes.lending}>
                    <Stack m={0}>
                        <Title ta="center" mb="md" order={1}>
                            Что предоставляет сервис{" "}
                            <Text
                                inherit
                                component="span"
                                fw={900}
                                variant="gradient"
                                gradient={{ from: "indigo", to: "teal", deg: 50 }}
                            >
                                "Город-24"
                            </Text>
                            ?
                        </Title>
                        <Text>
                            Наш веб-сайт превращает процесс создания и отправки обращений в
                            муниципальные службы города в простое заполнение формы прямо на сайте.
                        </Text>
                        <Text mb="xl">
                            Вы можете отравить обращение насчет проблем со стоком дождевой воды,
                            формирования опасных сосулек на зданиях, открытых люках, мусоре на
                            дорогах и других проблемах.
                        </Text>

                        <Button
                            onClick={() =>
                                scrollIntoView({
                                    alignment: "center",
                                })
                            }
                        >
                            Создать обращение
                        </Button>
                    </Stack>

                    <Container m={0}>
                        <BackgroundImage src={gorod} className={classes.background} />
                    </Container>
                </Container>
            </Container>

            <Container
                // @ts-ignore
                ref={targetRef}
                m={0}
                mt="xl"
            >
                <ReportForm />
            </Container>
        </Container>
    );
};
