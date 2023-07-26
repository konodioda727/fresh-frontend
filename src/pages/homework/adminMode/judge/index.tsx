import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { Avatar, Card,  Switch } from 'antd';
const { Meta } = Card;
const HomeworkJudge: React.FC = () => {
    const {id} = useParams()
    console.log(id);
    return (
        <>
        <Comment></Comment>
        </>
    )
}

export default HomeworkJudge

export const Comment: React.FC = () => {
    const [loading, setLoading] = useState(true);

    const onChange = (checked: boolean) => {
        setLoading(!checked);
    };

    return (
        <>
        <Switch checked={!loading} onChange={onChange} />
        <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
            <Meta
                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />}
                title="Card title"
                description="This is the description"
            />
        </Card>
        </>
    );
}