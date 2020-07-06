import React from 'react'
import { Button, Collapse } from 'antd'

import menus from '@/components/fields'
import { useDrag } from 'react-dnd'

import Item from './Item'

import './index.less'

const { Panel } = Collapse

export default () => {
  console.log('menus:', menus)

  return (
    <Collapse defaultActiveKey={['container', 'fields', 'other']}>
      {
        menus.map(menu => (
          <Panel header={menu.name} key={menu.category} className="menus">
            {
              menu.children.map(item => (
                <Item item={item} key={item.name}/>
              ))
            }
          </Panel>
        ))
      }
    </Collapse>
  )
}
