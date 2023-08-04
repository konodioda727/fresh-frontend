import { Card, ConfigProvider, Input } from 'antd'
import React,{useState,useEffect, ChangeEvent, HTMLAttributes} from 'react'
import Submit from '../../../../../components/pages/button'
import Title from '../../../../../components/pages/title'
import './index.less'
const { TextArea } = Input


interface WriteCommentProps {
    onSubmit?: ()=>void,
    onChange?: (e:string)=>void
}
const WriteComment: React.FC<HTMLAttributes<HTMLDivElement> & WriteCommentProps> = (props) => {
    const [loading, setLoading] = useState<boolean>(true)
    const {onSubmit, onChange,...restProps} = props
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value
        onChange && onChange(value)
    }
    useEffect(()=>{
        setTimeout(() => {
            setLoading(!loading)
        }, 1000);
    },[])
    return (
        <div {...restProps}>
            <ConfigProvider theme={{token:{
            colorPrimary: '#F79B2E',
        }}}>
            <Card title={<Title title='评语' style={{marginLeft:0}}></Title>} className='write-comment-wrap' loading={loading}>
            <TextArea placeholder={'快来发表评论吧'}
            allowClear
            className={'write-comment-input '}
            style={{ resize: 'none' }}
            onChange={handleChange}
            >
            </TextArea>
            <Submit onClick={onSubmit} className='write-comment-button'>评论</Submit>
        </Card>
        </ConfigProvider>
        </div>

    )
}

export default WriteComment