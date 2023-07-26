import React,{CSSProperties, useState,useEffect} from 'react'
import {ConfigProvider, Input} from 'antd'
import './index.less'
import Uploader from '../upload'

const {TextArea} = Input
type InputType = 'input' | 'textarea' | 'file'

export interface InputProps {
    type: InputType,
    label: string,
    placeHolder?: string,
    style?: CSSProperties,
    className?: string,
    limit?: number,
    innerClassName?: string,
    onChange: (form:string | FormData) => void;
}

const InputBox: React.FC<InputProps> = (props) => {
    const [flag, setFlag] = useState<number>(0)
    const {
        type, 
        style, 
        className,
        label,
        placeHolder,
        limit,
        innerClassName,
        onChange
    } = props
    useEffect(() => {
        type != 'file' && setFlag((type === 'input'?1:0 )+ 1)
    })
    const handleChangeFile = (files: FormData) => {
        console.log(files);
        onChange(files)
    }
    const handleChangeInput = (e: any) => {
        console.log(e.target.value);
        onChange(e.target.value);
    }
    return (
        <ConfigProvider theme={{
            token:{
                colorPrimary:'#F79B2E'
            }
        }}>
            <div className={'input-wrap'+ ' ' + className} style={style}>
            <div className="input-label">{label}</div>
            {flag == 2
            ?<Input 
                placeholder={placeHolder} 
                allowClear
                className={'input-element '+ innerClassName}
                maxLength={limit}
                onChange={handleChangeInput}
                showCount={typeof(limit) != 'undefined'}
                ></Input>
            : !flag
                ?<Uploader onChange={handleChangeFile} className={'upload-element ' + innerClassName}></Uploader>
                :<TextArea 
                    placeholder={placeHolder} 
                    allowClear
                    className={'textarea-element ' + innerClassName}
                    style={{resize:'none'}}
                    maxLength={limit}
                    onChange={handleChangeInput}
                    showCount={typeof(limit) != 'undefined'}
                    ></TextArea>}
        </div>
        </ConfigProvider>
        
    )
}

export default InputBox