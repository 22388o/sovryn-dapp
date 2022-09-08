import { Story } from '@storybook/react';

import React, { ComponentProps, useState } from 'react';

import { Input, InputProps } from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
};

const Template: Story<ComponentProps<typeof Input>> = args => (
  <Input {...args} />
);

const AdvancedTemplate: Story<ComponentProps<typeof Input>> = args => {
  const [value, setValue] = useState('hello world');

  return (
    <div>
      <Input {...args} value={value} onChangeText={setValue} />
      <p>
        This value will change after {args.debounce}ms: {value}
      </p>
    </div>
  );
};

export const TextInput = Template.bind({});
TextInput.args = {
  value: 'example input text',
  type: 'text',
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  value: 13.37,
  step: 1,
  type: 'number',
};

export const DebouncedInput = AdvancedTemplate.bind({});
DebouncedInput.args = {
  debounce: 300,
};

const renderInput = (label: string, props: InputProps) => (
  <div className="w-full">
    <div>{label}</div>
    <Input {...props} />
  </div>
);

export const AllVariations: React.FC<InputProps> = props => (
  <div className="flex flex-col justify-evenly items-center mb-4 space-y-4 w-full">
    {renderInput('Empty text', {
      ...props,
      placeholder: 'Enter wallet address',
    })}
    {renderInput('With text value', {
      ...props,
      value: 'Hello World',
    })}
    {renderInput('Disabled text', {
      ...props,
      value: 'Hello World',
      disabled: true,
    })}
    {renderInput('Text & Unit', {
      ...props,
      value: 'Hello World',
      unit: 'RBTC',
    })}
    {renderInput('Read-only text', {
      ...props,
      value: 'Hello World',
      readOnly: true,
    })}
    {renderInput('Read-only text & Unit', {
      ...props,
      value: 'Hello World',
      readOnly: true,
      unit: 'RBTC',
    })}
    {renderInput('Invalid text', {
      ...props,
      value: 'Hello World',
      invalid: true,
    })}
    {renderInput('Numeric empty', {
      ...props,
      type: 'number',
      placeholder: 'Enter amount',
    })}
    {renderInput('Numeric with value', {
      ...props,
      value: '100.5',
      type: 'number',
    })}
    {renderInput('Numeric & Unit', {
      ...props,
      value: '100.5',
      type: 'number',
      unit: 'RBTC',
    })}
    {renderInput('Numeric read-only', {
      ...props,
      value: '100.5',
      type: 'number',
      readOnly: true,
    })}
    {renderInput('Numeric read-only & Unit', {
      ...props,
      value: '100.5',
      type: 'number',
      readOnly: true,
      unit: 'RBTC',
    })}
    {renderInput('Numeric invalid', {
      ...props,
      value: '100.5',
      type: 'number',
      invalid: true,
    })}
  </div>
);
