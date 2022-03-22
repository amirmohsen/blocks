import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PlainButton from '.';

export default {
  title: 'Plain/Button',
  component: PlainButton,
} as ComponentMeta<typeof PlainButton>;

const Template: ComponentStory<typeof PlainButton> = (args) => <PlainButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Plain Button',
};
