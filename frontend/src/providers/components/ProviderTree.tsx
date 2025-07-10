"use client";

import { MantineProvider } from "@mantine/core";
import { GlobalLoadingProvider } from "../GlobalLoadingProvider";
import { defaultTheme } from "@/lib/theme/DefaultTheme";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";

export default function ProviderTree({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider theme={defaultTheme} defaultColorScheme="auto">
      <GlobalLoadingProvider>
        <ModalsProvider>
          <Notifications
            limit={5}
            styles={{
              notification: {
                borderRadius: "0.5rem",
              },
              root: {
                zIndex: 1000,
              },
            }}
          />
          {children}
        </ModalsProvider>
      </GlobalLoadingProvider>
    </MantineProvider>
  );
}
