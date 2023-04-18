import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const SahifaMavjudEmas: React.FC = () => {
    const navigate = useNavigate()
    const hadlerRedirectHome = () => {
        navigate('/')
    }
    return (
        <Result
            status="404"
            title="404"
            subTitle="Кечирасиз сиз ташриф килган сахифа мавжуд эмас!"
            extra={<Button onClick={hadlerRedirectHome} type="primary">Асосий сахифа</Button>}
        />
    )
};

export default SahifaMavjudEmas;