import {
    Box,
    Button,
    Image,
    Group,
    Select,
    Stack,
    Textarea,
    Title,
    FileButton,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";

import { Dropzone } from "./components";
import { IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useUuid, useGeolocation } from "./hooks";
import { categoriesObj } from "./categories";
import { useNavigate } from "react-router-dom";

export const ReportForm = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/reports`;
        navigate(path);
    };

    const uuid = useUuid();
    const location = useGeolocation();
    console.log("uuid", uuid);

    const form = useForm({
        initialValues: {
            file: null,
            category: "",
            description: "",
        },

        validate: {},
    });

    const handleSetImage = (imageFiles) => {
        form.setFieldValue("file", imageFiles[0]);
    };

    const handleRemoveImage = () => {
        form.setFieldValue("file", null);
    };

    const handleSubmit = async (values) => {
        console.log("values", values, uuid, location);

        const formData = new FormData();

        formData.append("file", values.file);
        formData.append(
            "issue",
            JSON.stringify({
                categoryId: categoriesObj[values.category],
                description: values.description,
                location,
            })
        );

        // @ts-ignore
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v0/issues/`, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "X-User-UUID": uuid,
            },
            body: formData,
        });
        console.log("res", res);

        if (res.ok) routeChange();
    };

    return (
        <Box maw={600} mx="auto">
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Title mb="sm" order={2}>
                    Создание обращения
                </Title>
                {form.values.file === null ? (
                    <Dropzone mx="auto" onDrop={handleSetImage} />
                ) : (
                    <Stack>
                        <Box style={{ borderRadius: "1rem" }}>
                            <Image
                                mah="40vh"
                                fit="contain"
                                src={URL.createObjectURL(form.values.file)}
                            />
                        </Box>
                        <Group justify="center">
                            <FileButton
                                onChange={(imageFile) => handleSetImage([imageFile])}
                                // @ts-ignore
                                accept={IMAGE_MIME_TYPE}
                            >
                                {(props) => <Button {...props}>Выбрать другое фото</Button>}
                            </FileButton>
                            <Button variant="outline" color="pink" onClick={handleRemoveImage}>
                                Удалить
                            </Button>
                        </Group>
                    </Stack>
                )}
                <Box maw={340} mt="md" mx="auto">
                    <Stack>
                        <Select
                            label="Категория"
                            description="Здесь вы можете выбрать категорию проблемы"
                            placeholder="Мусор"
                            data={Object.keys(categoriesObj)}
                            {...form.getInputProps("category")}
                        />
                        <Textarea
                            label="Описание проблемы"
                            description="Здесь вы можете описать проблему"
                            placeholder="У моего дома не убирают мусор"
                            {...form.getInputProps("description")}
                        />
                    </Stack>

                    <Group justify="center" mt="md">
                        <Button type="submit" fullWidth>
                            Отправить
                        </Button>
                    </Group>
                </Box>
            </form>
        </Box>
    );
};
