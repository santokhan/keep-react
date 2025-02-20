import { cn } from '../../helpers/cn'
import { useTheme } from '../../Keep/ThemeContext'
import { DeepPartial } from '../../helpers/deep-partial'
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'

export interface keepDropdownItemTheme {
  base: string
  icon: string
}

export interface DropdownItemProps extends PropsWithChildren, ComponentProps<'li'> {
  icon?: ReactNode
  onClick?: () => void
  theme?: DeepPartial<keepDropdownItemTheme>
}

export const DropdownItem: FC<DropdownItemProps> = ({ children, className, icon: Icon, onClick, ...props }) => {
  const theme = useTheme().theme.dropdown.floating.item

  return (
    <li className={cn(theme.base, className)} onClick={onClick} {...props}>
      {Icon && <span className={theme.icon}>{Icon}</span>}
      {children}
    </li>
  )
}
