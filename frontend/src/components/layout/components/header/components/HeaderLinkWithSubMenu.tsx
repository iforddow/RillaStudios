import {
  Anchor,
  Box,
  Button,
  Center,
  Divider,
  Group,
  HoverCard,
  SimpleGrid,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { SubMenu } from "../types/SubMenu";
import HeaderSubMenuLink from "./HeaderSubMenuLink";
import classes from "../css/Header.module.css";

export default function HeaderLinkWithSubMenu({
  submenu,
}: {
  submenu: SubMenu;
}) {
  const theme = useMantineTheme();

  const links = submenu.items.map((item) => (
    <HeaderSubMenuLink submenuItem={item} />
  ));

  return (
    <HoverCard
      width={600}
      position="bottom"
      radius="md"
      shadow="md"
      withinPortal
    >
      <HoverCard.Target>
        <a
          href={submenu.useHrefOnSubmenuLink ? submenu.href : "#"}
          className={classes.link}
        >
          <Center inline>
            <Box component="span" mr={5}>
              Features
            </Box>
            <IconChevronDown size={16} color={theme.colors.primary[6]} />
          </Center>
        </a>
      </HoverCard.Target>

      <HoverCard.Dropdown style={{ overflow: "hidden" }}>
        <Group justify="space-between" px="md">
          <Text>Features</Text>
          <Anchor href="#" fz="xs">
            View all
          </Anchor>
        </Group>

        <Divider my="sm" />

        <SimpleGrid cols={2} spacing={0}>
          {links}
        </SimpleGrid>

        <div className={classes.dropdownFooter}>
          <Group justify="space-between">
            <div>
              <Text fw={500} fz="sm">
                Get started
              </Text>
              <Text size="xs" c="dimmed">
                Their food sources have decreased, and their numbers
              </Text>
            </div>
            <Button variant="default">Get started</Button>
          </Group>
        </div>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
