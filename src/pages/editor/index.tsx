import React, { useRef } from 'react'
import { Typography, Table, Button } from 'antd'
import { useDrop, useDrag, DropTargetMonitor, DragSourceMonitor } from 'react-dnd'

import { Search } from '@/components'

import TableHeader from './TableHeader'
import DragField from './FormField'
import Menu from './Menu'
import SearchContainer from './SearchContainer'

import './index.less'

const { Title, Paragraph } = Typography;

export default () => {
  const formatFields = [
    {
      name: 'name',
      title: '姓名',
      'x-component': 'Input',
      editable: true,
      visible: true,
      display: true,
      default: '111',
    },
    {
      name: 'sex',
      title: '性别',
      'x-component': 'Select',
      editable: true,
      enum: [
        { label: '男', value: 1 },
        { label: '女', value: 0 },
      ],
      default: 0,
    },
    {
      name: 'date',
      type: 'date',
      title: '日期',
      'x-component': 'DatePicker',
      'x-component-props': {
        getPopupContainer: node => node.parentNode,
      }
    },
    {
      name: 'daterange',
      title: '日期范围',
      'x-component': 'DateRangePicker',
      'x-component-props': {
        getPopupContainer: node => node.parentNode,
      }
    }
  ]

  // 搜索栏 Field
  const schema = {
    name: {
      title: '姓名',
      'x-component': 'Input',
      editable: true,
      visible: true,
      display: true,
      default: '111',
    },
    sex: {
      title: '性别',
      'x-component': 'Select',
      editable: true,
      enum: [
        { label: '男', value: 1 },
        { label: '女', value: 0 },
      ],
      default: 0,
    },
    date: {
      title: '日期',
      'x-component': 'DatePicker',
      'x-component-props': {
        getPopupContainer: node => node.parentNode,
      }
    },
    daterange: {
      title: '日期范围',
      'x-component': 'DateRangePicker',
      'x-component-props': {
        getPopupContainer: node => node.parentNode,
      }
    },
  }

  const formatSchema = schema => Object.keys(schema).map(name => ({
    name,
    ...schema[name],
  }))

  const columns = [
    {
      title: '订单编号',
      dataIndex: 'orderId',
    },
    {
      title: '办理人姓名',
      dataIndex: 'createrName',
    },
    {
      title: '手机号',
      dataIndex: 'createrMobile',
    },
    {
      title: '办理人公司',
      dataIndex: 'createrCompany',
    },
    {
      title: '产品编码',
      dataIndex: 'skuCode',
    },
    {
      title: '产品名称',
      dataIndex: 'skuName',
    },
    {
      title: '商品编码',
      dataIndex: 'itemCode',
      render: (text, record, index) => {
        return index + 1
      }
    },
  ]

  const handleSearch = (params: any) => {
    console.log('params:', params)
  }

  const handleExport = () => {

  }

  const Fields = [
    { name: 'name', title: '姓名' },
    { name: 'age', title: '年龄' },
    { name: 'sex', title: '性别' },
  ]

  return (
    <Typography className="editor">
      <Title>Introduction</Title>
      <Paragraph className="editor-content">
        {/*<Search schema={schema} onSearch={handleSearch} />*/}
        {/*<TableHeader columns={columns} />*/}
        {/*<Table columns={columns} dataSource={[]} showHeader={false}/>*/}
        <Menu />
        <SearchContainer fields={formatFields} />

        <Button onClick={handleExport}>导出数据</Button>
      </Paragraph>
    </Typography>

  )
}
