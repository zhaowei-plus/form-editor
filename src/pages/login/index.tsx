import React from 'react'
import SchemaForm, { SchemaMarkupField as Field, Submit } from '@formily/antd'
import { ISubmit } from '@/assets/constant'

import LOGO from '@/assets/logo.png'

import './index.less'

export default () => {
  const onSubmit = (params: ISubmit) => {
    console.log('params:', params)
    // 用户登录
    history.push('/home')
  }

  return (
    <div className="login">
      <div className="login__header">
        <img src={LOGO} className="icon" />
        <span className="title">云商城</span>
      </div>
      <div className="login__content">
        <SchemaForm
          labelCol={0}
          wrapperCol={24}
          onSubmit={onSubmit}
          className="login-from"
        >
          <Field
            type="string"
            name="username"
            x-props={{
              placeholder: '请输入用户名',
            }}
            x-rules={[{ required: true, message: '请输入用户名' }]}
          />
          <Field
            type="password"
            name="password"
            x-props={{
              placeholder: '请输入密码',
            }}
            x-component="XmPassword"
            x-rules={[{ required: true, message: '请输入密码' }]}
          />
          <Submit>登录</Submit>
        </SchemaForm>

        <div className="login-description">
          <p className="tips">尚未开通账号或忘记密码请联系管理员</p>
        </div>
      </div>
    </div>
  )
}
