import {
  UnstyledButton,
  Group,
  ThemeIcon,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { SubMenuItem } from "../types/SubMenuItem";
import DynamicIcon from "@/components/DynamicIcon";
import classes from "../css/Header.module.css";

export default function HeaderSubMenuLink({
  submenuItem,
}: {
  submenuItem: SubMenuItem;
}) {
  return (
    <UnstyledButton className={classes.subLink} key={submenuItem.label}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <DynamicIcon src={submenuItem.icon} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {submenuItem.label}
          </Text>
          <Text size="xs" c="dimmed">
            {submenuItem.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}
