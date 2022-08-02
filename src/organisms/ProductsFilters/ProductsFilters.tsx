import { Dispatch, SetStateAction } from 'react'
import { cnb } from 'cnbuilder'

import { Button, Select, SelectProps, SelectOption } from '../../atoms'

type CurrencyInputProps = {
  placeholder?: string
  onChange?: (value: string) => void
}

const CurrencyInput = ({ placeholder, onChange }: CurrencyInputProps) => {
  return (
    <div className='relative'>
      <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
        <span className='sm:text-sm'> $ </span>
      </div>
      <input
        type='text'
        placeholder={placeholder}
        onChange={e => onChange?.(e.target.value)}
        className='py-2 px-1 pl-6 w-32 placeholder:text-gray-500 rounded-2xl border focus:outline-none
          focus-visible:ring-1 shadow focus-visible:border-primary
          focus-visible:ring-primary focus-visible:ring-offset-primary'
      />
    </div>
  )
}

export type ProductsFilterTab = 'vendor' | 'product'

export type ProductsFiltersProps<C, SC, B> = {
  title: string
  buttonText: string
  tab: ProductsFilterTab
  tabsText: { vendor: string; product: string }
  categoriesSelectProps: SelectProps<C>
  subCategoriesSelectProps: SelectProps<SC>
  brandsSelectProps: SelectProps<B>
  onTabChange?: Dispatch<SetStateAction<ProductsFilterTab>>
  onSearch?: () => void
  onMinChange?: Dispatch<SetStateAction<string>>
  onMaxChange?: Dispatch<SetStateAction<string>>
}

export const ProductsFilters = <
  C extends SelectOption,
  SC extends SelectOption,
  B extends SelectOption
>({
  title,
  buttonText,
  tab = 'product',
  tabsText,
  categoriesSelectProps,
  subCategoriesSelectProps,
  brandsSelectProps,
  onTabChange,
  onSearch,
  onMinChange,
  onMaxChange,
}: ProductsFiltersProps<C, SC, B>) => {
  return (
    <div className='p-8 w-96 rounded-2xl shadow-lg bg-base-100'>
      <div className='mb-2 text-xl font-semibold text-center text-neutral'>
        {title}
      </div>
      <div className='flex items-center px-2 text-white rounded-full transition'>
        <button
          className={cnb(
            'grow rounded-l-full p-1 transition duration-300',
            tab === 'vendor' ? 'bg-primary' : 'bg-base-300'
          )}
          onClick={() => onTabChange?.('vendor')}
        >
          {tabsText.vendor}
        </button>
        <button
          className={cnb(
            'grow rounded-r-full p-1 transition duration-300',
            tab === 'product' ? 'bg-primary' : 'bg-base-300'
          )}
          onClick={() => onTabChange?.('product')}
        >
          {tabsText.product}
        </button>
      </div>
      <div className='my-10 space-y-4'>
        <Select {...categoriesSelectProps} />
        <Select {...subCategoriesSelectProps} />
        <Select {...brandsSelectProps} />
      </div>
      <div className='flex justify-between items-center my-10 w-full'>
        <CurrencyInput placeholder='Min' onChange={onMinChange} />
        <CurrencyInput placeholder='Max' onChange={onMaxChange} />
      </div>
      <div className='w-full text-center'>
        <Button
          type='submit'
          variant='contained'
          className='!text-lg font-bold btn-wide'
          onClick={onSearch}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}
