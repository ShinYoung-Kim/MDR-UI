import type { Meta, StoryObj } from "@storybook/react";
import Toast from "../src/Toast";

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: "Toast",
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Primary: Story = {
  render: () => <Toast />,
  name: "Toast",
};
