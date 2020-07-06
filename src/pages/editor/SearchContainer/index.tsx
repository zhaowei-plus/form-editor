import React, { useRef, useEffect } from 'react'
import { useDrop, useDrag, DropTargetMonitor, DragSourceMonitor } from 'react-dnd'
import { useConcent } from 'concent'
import cs from 'classnames'

import '../store'

import './index.less'

import DragField from '../FormField'

export default (props: any) => {
  const { state, mr: actions } = useConcent('editor')
  const { fields } = state
  console.log('SearchContainer fields:', fields)

  const ref = useRef()

  // 接口
  const [{ canDrop, isOverCurrent }, drop] = useDrop({
    accept: 'menu',
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOverCurrent: monitor.isOver({ shallow: true })
    }),
    drop: (params: any) => {
      const { field: dragField, index } = params
      console.log('SearchContainer drop:', params)
      const { field, type } = params

      if (type === 'menu') {
        actions.addField({
          field: {
            name: `${(new Date()).getTime()}`,
            ...field,
          }
        })
      }

      return {
        dragField,
        index,
        dropRegion: 'SearchContainer'
      }
    }
  })

  useEffect(() => {
    actions.setFields(props.fields)
  }, [props.fields])

  drop(ref)

  const hover = canDrop && isOverCurrent

  return (
    <div
      className={
        cs('search-container form', {
          'hover': hover
        })
      }
      ref={ref}
    >
      {
        fields.map((field, index) => (
          <DragField field={field} key={field.name} index={index} />
        ))
      }
    </div>
  )
}
