import { registerFormFields, connect } from '@formily/antd'

import XmPassword from './xm-password'

// 全局批量扩展，请查看帮助文档：https://formilyjs.org/#/0yTeT0/jYSxSwhmHa
registerFormFields({
  XmPassword: connect()(XmPassword),
})
