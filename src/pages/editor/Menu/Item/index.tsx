import React, { useRef } from 'react'
import { useDrag, DragSourceMonitor } from 'react-dnd'

import './index.less'

const type = 'menu'

export default (props) => {
  const { item } = props
  const { icon, title, field } = item

  const ref = useRef()

  const [, drag] = useDrag({
    item: {
      type,
      field,
    }
  })

  drag(ref)

  return (
    <div className="item" ref={ref}>
      <img src={require(`@/assets/fields/${icon}`)} alt={title} />
      <span>{title}</span>
    </div>
  )
}
