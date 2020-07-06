import React, { ReactNode } from 'react'
import { Space } from 'antd'

import './index.less'

interface IProps {
  children: ReactNode
}

export default (props: IProps) => {
  return (
    <Space className="action">{props.children}</Space>
  )
}
