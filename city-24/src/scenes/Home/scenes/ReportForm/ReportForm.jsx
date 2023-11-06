import { Box, Button, Checkbox, Container, Group, Skeleton, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";

import { Dropzone } from "./components";

export const ReportForm = () => {
    const form = useForm({
        initialValues: {
            email: "",
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
        },
    });

    return (
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Dropzone />
            <Box maw={340} mx="auto">
                <TextInput
                    label="Email"
                    placeholder="your@email.com"
                    {...form.getInputProps("email")}
                />

                <Checkbox
                    mt="md"
                    label="I agree to sell my privacy"
                    {...form.getInputProps("termsOfService", { type: "checkbox" })}
                />

                <Group justify="flex-end" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </Box>
        </form>
    );
};
