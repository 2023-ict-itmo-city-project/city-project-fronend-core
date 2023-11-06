import React from "react";
import { Group, Text, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone as MantineDropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";

export const Dropzone = (props) => {
    return (
        <MantineDropzone
            onDrop={(files) => console.log("accepted files", files)}
            onReject={(files) => console.log("rejected files", files)}
            maxSize={3 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            {...props}
        >
            <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: "none" }}>
                <MantineDropzone.Accept>
                    <IconUpload
                        style={{
                            width: rem(52),
                            height: rem(52),
                            color: "var(--mantine-color-blue-6)",
                        }}
                        stroke={1.5}
                    />
                </MantineDropzone.Accept>
                <MantineDropzone.Reject>
                    <IconX
                        style={{
                            width: rem(52),
                            height: rem(52),
                            color: "var(--mantine-color-red-6)",
                        }}
                        stroke={1.5}
                    />
                </MantineDropzone.Reject>
                <MantineDropzone.Idle>
                    <IconPhoto
                        style={{
                            width: rem(52),
                            height: rem(52),
                            color: "var(--mantine-color-dimmed)",
                        }}
                        stroke={1.5}
                    />
                </MantineDropzone.Idle>

                <div>
                    <Text size="xl" inline>
                        Drag images here or click to select files
                    </Text>
                    <Text size="sm" c="dimmed" inline mt={7}>
                        Attach as many files as you like, each file should not exceed 5mb
                    </Text>
                </div>
            </Group>
        </MantineDropzone>
    );
};
