/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import { CompatibleHTMLProps } from '@looker/design-tokens'
import React, {
  cloneElement,
  FC,
  isValidElement,
  ReactNode,
  useContext,
  useMemo,
} from 'react'
import styled from 'styled-components'
import { ComboboxOptionObject, ComboboxOptionStatuses } from './types'
import {
  ComboboxContext,
  ComboboxMultiContext,
  OptionContext,
} from './ComboboxContext'

export type OptionIndicatorProps = ComboboxOptionStatuses & ComboboxOptionObject

export type ComboboxOptionIndicatorFunction = (
  indicatorProps: OptionIndicatorProps
) => ReactNode

function isIndicatorFunction(
  children: ReactNode | ComboboxOptionIndicatorFunction
): children is ComboboxOptionIndicatorFunction {
  return typeof children === 'function'
}

export interface ComboboxOptionIndicatorProps
  extends ComboboxOptionStatuses,
    CompatibleHTMLProps<HTMLDivElement> {
  /**
   * Customize the area to the left of the label, which by default
   * renders a check mark for the selected option or a spacer
   * Use a ReactNode, function component or render-prop-style function, or false to remove
   */
  indicator?: ReactNode | ComboboxOptionIndicatorFunction
  isMulti?: boolean
}

const ComboboxOptionIndicatorLayout: FC<ComboboxOptionIndicatorProps> = ({
  children,
  indicator: propsIndicator,
  isActive,
  isSelected,
  isMulti,
  ...props
}) => {
  const context = useContext(ComboboxContext)
  const contextMulti = useContext(ComboboxMultiContext)
  const contextToUse = isMulti ? contextMulti : context
  const { indicatorPropRef } = contextToUse
  const indicatorToUse =
    propsIndicator !== undefined
      ? propsIndicator
      : indicatorPropRef && indicatorPropRef.current

  const option = useContext(OptionContext) || { value: '' }
  const { label, value } = option

  const indicator = useMemo(() => {
    const indicatorProps = { isActive, isSelected, label, value }
    if (isValidElement(indicatorToUse)) {
      return cloneElement(indicatorToUse, indicatorProps)
    } else if (isIndicatorFunction(indicatorToUse)) {
      return indicatorToUse(indicatorProps)
    }
    return indicatorToUse
  }, [indicatorToUse, isActive, isSelected, value, label])

  if (indicatorToUse !== undefined) {
    return <>{indicator}</>
  } else {
    return <div {...props}>{children}</div>
  }
}

export const ComboboxOptionIndicator = styled(ComboboxOptionIndicatorLayout)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.theme.space.large};
  flex-shrink: 0;
  margin-right: ${(props) => props.theme.space.xxsmall};
  flex-basis: ${({ theme, isMulti }) =>
    isMulti ? theme.space.xlarge : theme.space.medium};
`
