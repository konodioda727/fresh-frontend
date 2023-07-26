import React,{HTMLAttributes} from 'react'
import './index.less'

interface SelectorProps {
    title: string,
    data: string[],
    className?: string,
    onChange?: () => void
}
const Selector: React.FC<SelectorProps & Omit<HTMLAttributes<HTMLDivElement>,'className'>> = (props) => {
    const {title,className , data, onChange,...restProps} = props
    return (
        <>
        <div className={'selector-wrap ' + className} {...restProps}>
            <div className='selector-title'>
                <div className='selector-title-text'>{title}</div>
            </div>
            {data.map((item,index)=>
                <li 
                    className='selector-item' 
                    key={item+index}
                    onChange={onChange}>
                    <div className='selector-item-text'>{item}</div>
                </li>)}
        </div>
        </>
    )
}

export default Selector