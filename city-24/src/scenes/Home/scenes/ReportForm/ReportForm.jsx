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

export const ReportForm = () => {
    const form = useForm({
        initialValues: {
            imageFile: null,
            category: "",
        },

        validate: {},
    });

    const handleSetImage = (imageFiles) => {
        form.setFieldValue("imageFile", imageFiles[0]);
    };

    const handleRemoveImage = () => {
        form.setFieldValue("imageFile", null);
    };

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Box maw={600} mx="auto">
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Title mb="sm" order={2}>
                    Создание обращения
                </Title>
                {form.values.imageFile === null ? (
                    <Dropzone mx="auto" onDrop={handleSetImage} />
                ) : (
                    <Stack>
                        <Box style={{ borderRadius: "1rem" }}>
                            <Image
                                mah="40vh"
                                fit="contain"
                                src={URL.createObjectURL(form.values.imageFile)}
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
                            data={["🗑️ Мусор", "❄ Осадки", "⚠ Опасность", "✨ Другое"]}
                            {...form.getInputProps("category")}
                        />
                        <Textarea
                            label="Описание проблемы"
                            description="Здесь вы можете описать проблему"
                            placeholder="У моего дома не убирают мусор"
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
