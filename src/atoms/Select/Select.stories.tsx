import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Select } from './Select'

interface Category {
  en_name: string
  es_name: string
}

const CATEGORIES: Category[] = [
  {
    en_name: 'Example 1',
    es_name: 'Ejemplo 2',
  },
  {
    en_name: 'Example 2',
    es_name: 'Ejemplo 2',
  },
]

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  classNames: {
    button: 'w-[316px] bg-white shadow p-3',
    panel: 'w-[316px]',
  },
  options: CATEGORIES,
  selected: CATEGORIES[0],
}
