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

import React, { ReactNode, FC } from 'react'
import styled from 'styled-components'
import { color, TextColorProps } from '@looker/design-tokens'

export interface TreeGroupProps extends TextColorProps {
  children: ReactNode
  className?: string
  /**
   * Visible label of the TreeGroup
   */
  label: string
}

const TreeGroupLabel = styled.div`
  /* Border is here to get proper alignment with Tree and TreeItem text */
  border: 1px transparent solid;
  padding: ${({ theme }) => `${theme.space.xsmall} ${theme.space.xxsmall}`};
  font-size: ${({ theme }) => theme.space.small};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`

const TreeGroupLayout: FC<TreeGroupProps> = ({
  children,
  className,
  label,
}) => (
  <div className={className}>
    <TreeGroupLabel>{label}</TreeGroupLabel>
    {children}
  </div>
)

export const TreeGroup = styled(TreeGroupLayout)`
  ${color}
`
