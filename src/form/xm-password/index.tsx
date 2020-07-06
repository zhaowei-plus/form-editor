import React from 'react'
import { Input } from 'antd'
import { IForm } from '@/assets/constant'

export default (props: IForm) => {
  const { value = '', onChange, placeholder, disabled = false } = props
  const handleChange = (e: any) => {
    onChange(window.btoa(e.target.value))
  }

  // 文本态
  if (disabled) {
    return <span>********</span>
  }

  // 编辑态
  return (
    <Input.Password
      value={window.atob(value)}
      onChange={handleChange}
      visibilityToggle={false}
      placeholder={placeholder}
    />
  )
}
