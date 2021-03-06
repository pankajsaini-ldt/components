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

import React, { FC } from 'react'
import styled from 'styled-components'
import { IconNames } from '@looker/icons'
import { Icon } from '../Icon'
import { AvatarUser, AvatarUserProps } from './AvatarUser'
import { AvatarIcon, AvatarIconProps } from './AvatarIcon'

export interface AvatarComboProps
  extends Omit<AvatarIconProps & AvatarUserProps, 'size'> {
  secondaryIcon: IconNames
  /**
   *  @default `keyFocus`
   **/
  secondaryColor?: string
  /**
   *  @default `keyFocus`
   **/
  secondaryBg?: string
}

const AvatarIconSecondary = styled(AvatarIcon)``

const AvatarLayout: FC<AvatarComboProps> = ({
  secondaryIcon,
  secondaryColor,
  secondaryBg,
  color,
  icon = 'User',
  user,
  className,
}) => {
  return (
    <div className={className}>
      {user ? (
        <AvatarUser user={user} color={color} />
      ) : (
        <AvatarIcon color={color} icon={icon} />
      )}
      <AvatarIconSecondary
        bg={secondaryBg}
        color={secondaryColor}
        icon={secondaryIcon}
      />
    </div>
  )
}

export const AvatarCombo = styled(AvatarLayout)`
  position: relative;
  height: 40px;
  width: 40px;

  ${AvatarIconSecondary} {
    bottom: -4px;
    right: -4px;
    position: absolute;
    height: 20px;
    width: 20px;

    ${Icon} {
      height: 14px;
      width: 14px;
    }
  }
`
