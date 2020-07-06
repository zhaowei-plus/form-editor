import Checkbox from './Checkbox'
import DatePicker from './DatePicker'
import DateRangePicker from './DateRangePicker'
import Input from './Input'
import Radio from './Radio'
import Select from './Select'
import Switch from './Switch'
import TextArea from './TextArea'

export default [
  {
    category: 'container',
    name: '布局容器',
    children: []
  },
  {
    category: 'fields',
    name: '基础组件',
    children: [
      Checkbox,
      DatePicker,
      DateRangePicker,
      Input,
      Radio,
      Select,
      Switch,
      TextArea,
    ]
  },
  {
    category: 'other',
    name: '自定义组件',
    children: []
  }
]
