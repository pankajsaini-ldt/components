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

import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionDisclosure,
  Box,
  Grid,
  List,
  ListItem,
  Icon,
  Fieldset,
  FieldText,
  Space,
  Badge,
} from '@looker/components'

const lorem = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`
const placeholder = (
  <Box p="medium" bg="ui1" color="inform">
    {lorem}
  </Box>
)

const form = (
  <Fieldset>
    <Fieldset inline>
      <FieldText label="First name" />
      <FieldText label="Middle" />
      <FieldText label="Last name" />
    </Fieldset>
    <FieldText label="Email" />
    <FieldText label="Phone" />
  </Fieldset>
)

const visibleLabel = (
  <Space between>
    <span>Customer Details</span>
    <Icon color="text4" name="CircleQuestionOutline" size={20} />
  </Space>
)

export const AccordionDemo = () => {
  const [isOpen, setIsOpen] = useState(true)

  const spicyAccordion = (
    <Accordion
      indicatorPosition="left"
      isOpen={isOpen}
      toggleOpen={setIsOpen}
      onOpen={() => alert('Opening doors')}
      onClose={() => alert('Closing doors')}
    >
      <AccordionDisclosure>{visibleLabel}</AccordionDisclosure>
      <AccordionContent>{placeholder}</AccordionContent>
    </Accordion>
  )

  return (
    <Grid m="xxlarge" gap="xxlarge">
      <Accordion m="xlarge" pl="xlarge" indicatorPosition="left" defaultOpen>
        <AccordionDisclosure>Hello World</AccordionDisclosure>
        <AccordionContent>
          <List>
            <ListItem>Cheddar</ListItem>
            <ListItem>Cheddar</ListItem>
            <ListItem>Cheddar</ListItem>
            <ListItem>
              <Accordion indicatorPosition="left" defaultOpen>
                <AccordionDisclosure>Hello World</AccordionDisclosure>
                <AccordionContent>
                  <List>
                    <ListItem>Cheddar</ListItem>
                    <ListItem>Cheddar</ListItem>
                    <ListItem>Cheddar</ListItem>
                    <ListItem>
                      <Accordion indicatorPosition="left" defaultOpen>
                        <AccordionDisclosure>Hello World</AccordionDisclosure>
                        <AccordionContent>
                          <List>
                            <ListItem>Cheddar</ListItem>
                            <ListItem>Cheddar</ListItem>
                            <ListItem>Cheddar</ListItem>
                            <ListItem>
                              <Accordion indicatorPosition="left" defaultOpen>
                                <AccordionDisclosure>
                                  Hello World
                                </AccordionDisclosure>
                                <AccordionContent>
                                  <List>
                                    <ListItem>Cheddar</ListItem>
                                    <ListItem>Cheddar</ListItem>
                                    <ListItem>Cheddar</ListItem>
                                    <ListItem>Cheddar</ListItem>
                                  </List>
                                </AccordionContent>
                              </Accordion>
                            </ListItem>
                          </List>
                        </AccordionContent>
                      </Accordion>
                    </ListItem>
                  </List>
                </AccordionContent>
              </Accordion>
            </ListItem>
          </List>
        </AccordionContent>
      </Accordion>

      <Accordion
        defaultOpen
        indicatorIcons={{ close: 'CaretLeft', open: 'CaretDown' }}
      >
        <AccordionDisclosure>Hello World</AccordionDisclosure>
        <AccordionContent>
          <Box borderLeft="1px dotted lightgrey" ml="xsmall" pl="small">
            <List fontSize="small">
              <ListItem>
                <Badge intent="inform">GET</Badge> Search Favorites
              </ListItem>
              <ListItem>
                <Badge intent="inform">GET</Badge> Get Favorites
              </ListItem>
              <ListItem>
                <Badge intent="critical">GET</Badge> Delete Favorite
              </ListItem>
              <ListItem>
                <Badge intent="positive">GET</Badge> Create Favorite
              </ListItem>
              <ListItem>
                <Badge intent="warn">POST</Badge> Update Content
              </ListItem>
            </List>
          </Box>
        </AccordionContent>
      </Accordion>

      <Fieldset>
        <FieldText label="I'm a little teapot" />
        <Accordion indicatorPosition="left" defaultOpen>
          <AccordionDisclosure>{visibleLabel}</AccordionDisclosure>
          <AccordionContent>{form}</AccordionContent>
        </Accordion>
      </Fieldset>

      <Fieldset>
        <FieldText label="I'm a little teapot" />

        <Accordion defaultOpen>
          <AccordionDisclosure>{visibleLabel}</AccordionDisclosure>
          <AccordionContent>{form}</AccordionContent>
        </Accordion>
      </Fieldset>

      {spicyAccordion}

      <Accordion indicatorSize="xxlarge" indicatorPosition="left" defaultOpen>
        <AccordionDisclosure>Advanced Options</AccordionDisclosure>
        <AccordionContent>{form}</AccordionContent>
      </Accordion>
    </Grid>
  )
}
