// 增加TS未识别的unocss属性声明
// 遇到ts对unocss报错就在这里添加相应属性
import * as React from 'react'
declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        flex?: boolean | string
        relative?: boolean
        text?: string
        grid?: boolean
        before?: string
        after?: string
        shadow?: boolean
        w?: string
        h?: string
        bg?: string
        rounded?: string
        fixed?: boolean
        b?: string
        z?: string
        block?: boolean
        'focus:shadow'?: boolean
    }
    interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {
        w?: string
        h?: string
    }
}
