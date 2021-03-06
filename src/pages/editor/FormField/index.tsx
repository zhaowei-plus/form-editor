import React, { useRef, Fragment } from 'react'
import { SchemaMarkupField as Field } from '@formily/antd'
import { useDrop, useDrag, DropTargetMonitor, DragSourceMonitor } from 'react-dnd'
import { Input, Select, DatePicker, Checkbox, Radio, Switch } from 'antd'
import cs from 'classnames'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import { useConcent } from 'concent'

import { isContain, isLeft, isRight } from '../utils'

import PreField from '../PreField'

import './index.less'

export default (props: any) => {
  const { field, index } = props
  const { name, title } = field

  const ref = useRef<any>()

  const { state, mr: actions } = useConcent('editor')
  const { preField } = state

  const [, drag] = useDrag({
    item: {
      type: 'Field'
    },
    begin: () => props,
    // end: (params: any, monitor: DragSourceMonitor) => {
    //   const { field: sourceField, index } = params
    //   const dropResult = monitor.getDropResult()
    //   if (dropResult) {
    //     const {  } = dropResult
    //   }
    //   console.log('FormField dropResult:', dropResult)
    // }
  });

  const [{ canDrop, isOverCurrent }, drop] = useDrop({
    accept: 'Field',
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOverCurrent: monitor.isOver({ shallow: true })
    }),
    canDrop: ({ field: dragField }: any, monitor: DropTargetMonitor): boolean => {
      return dragField.name !== field.name
    },
    hover: ({ field: dragField, dragIndex }: any, monitor: DropTargetMonitor) => {
      if (dragField.name === field.name) {
        return false
      }

      // 计算位置，用于动态显示
      if (canDrop && isOverCurrent) {
        const offset: any = monitor.getClientOffset()
        const boundRect = ref.current.getBoundingClientRect()

        const left = isLeft(offset, boundRect)
        const right = isRight(offset, boundRect)

        // if (left) {
        //   console.log('left preField:', preField, index)
        //   if (preField.index !== index && preField.pos !== 'left') {
        //     actions.setPreInfo({ index, pos: 'left' })
        //   }
        // } else if (right) {
        //   console.log('right preField:', preField, index)
        //   if (preField.index !== index && preField.pos !== 'right') {
        //     actions.setPreInfo({ index, pos: 'right' })
        //   }
        // } else {
        //   if (preField.index !== -1) {
        //     actions.setPreInfo({ index: -1 })
        //   }
        // }

        // return isContain(offset, boundRect)
      }
      return false
    },
    drop: (params: any) => {
      console.log('field drop:', field)
      const { field: sourceField, index: sourceIndex } = params

      if (field.name !== 'preField') {
        actions.swapField({
          sourceField,
          sourceIndex,
          index
        })
      } else {
        // actions.addField({
        //   index
        // })
      }

      // // 清除预置位
      // actions.setPreInfo({ index: -1 })

      return {
        dropField: field,
        index,
        dropRegion: 'Field'
      }
    }
  })

  drag(drop(ref))

  const renderField = () => {
    switch (field['x-component']) {
      case 'Input': {
        return <Input {...field['x-component-props']} />
      }
      case 'Select': {
        const { enum: options, default: defaultValue, ...rest } = field
        return <Select options={options} defaultValue={defaultValue} {...rest} {...field['x-component-props']}/>
      }
      case 'DatePicker': {
        return <DatePicker {...field['x-component-props']}/>
      }
      case 'DateRangePicker': {
        return <DatePicker.RangePicker {...field['x-component-props']}/>
      }
      case 'Radio': {
        const { enum: options, default: defaultValue, ...rest } = field
        return <Radio options={options} defaultValue={defaultValue} {...rest} {...field['x-component-props']}/>
      }
      case 'Checkbox': {
        const { enum: options, default: defaultValue, ...rest } = field
        return <Checkbox options={options} defaultValue={defaultValue} {...rest} {...field['x-component-props']}/>
      }
    }
  }

  const hover = canDrop && isOverCurrent

  const renderPreField = (pos) => {
    if (preField.index === index && preField.pos === pos) {
      return <PreField />
    }
  }

  return (
    <Fragment>
      {renderPreField('left')}
      <div
        className={cs('form-field', {
          'hover': hover
        })}
        key={name}
        ref={ref}
      >
        <div className="form-field__label">
          {title} :
        </div>
        <div className="form-field__input">
          {renderField()}
        </div>

        <div className="form-field__operation">
          <CloseOutlined />
        </div>
      </div>
      {renderPreField('right')}
    </Fragment>
  )
}
