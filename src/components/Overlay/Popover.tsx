import * as React from 'react'
import { withTheme } from '../../style'
import { Overlay, OverlayProps } from './Overlay'
import { popoverContent } from './popover_utils'

export interface PopoverProps extends OverlayProps {
  content: React.ReactNode
}

const InternalPopover: React.SFC<PopoverProps> = ({
  content,
  trigger,
  ...props
}) => (
  <Overlay
    {...props}
    trigger="click"
    overlayContentFactory={popoverContent(content)}
    backdrop
    backdropStyles={props.theme.components.Popover.backdrop}
  >
    {props.children}
  </Overlay>
)

export const Popover = withTheme(InternalPopover)
