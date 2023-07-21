import React,{useEffect, useState} from 'react'
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { items } from './menuConfig';

const HomeworkAdminMode: React.FC = () => {
    const [current, setCurrent] = useState<string>(items?items[0]?.key as string:'');
    const [DynamicComp, setDynamicComp] = useState()
    useEffect(() => {
        (async () => {
            const importedModule = await import(`./${current}/index.tsx`);
            setDynamicComp(importedModule.default);
        })()
    }, [current])
    const onClick: MenuProps['onClick'] = async (e) => {
        setCurrent(e.key)
    };
    return (
        <>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        <div className='comp'>
            {DynamicComp}
        </div>
        </>
    )
}

export default HomeworkAdminMode
