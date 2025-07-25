"use client";

import {
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./css/Header.module.css";
import RillaFullLogo from "@/components/images/RillaFullLogo";
import { IconChevronDown } from "@tabler/icons-react";
import HeaderLink from "./components/HeaderLink";
import { HeaderLink as HeaderLinkType } from "./types/HeaderLink";

export function Header({ menuItems }: { menuItems: HeaderLinkType[] }) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <RillaFullLogo />
          <Group h="100%" gap={0} visibleFrom="sm">
            {
              menuItems.map((item) => (
                <HeaderLink 
                  key={item.label}
                  headerLink={item}
                />
              ))
            }
          </Group>

          <Group visibleFrom="sm">
            <Button>Contact Us</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>
            {
              // Should be links
            }
          </Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
