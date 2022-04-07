import { useContext } from 'react';
import Countries from '../components/Countries';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { UserContext } from '../UserContext';
import { Form, Input, Button } from 'antd';

const Home = () => {
    const { user, setUser } = useContext(UserContext);

    const onConnect = (values: any) => {
        const user = {
            username: values.pseudo,
        };
        if (setUser !== undefined)
            setUser(user);
    };

    const onDeconnect = (values: any) => {
        // call logout
        if (setUser !== undefined)
            setUser(null);
    };

    const onFailed = (errorInfo: any) => {
        console.error('Failed:', errorInfo);
    };


    return (
        <div>
            <Logo></Logo>
            <Navigation></Navigation>
            <h1>ACCUEIL</h1>

            {user ? (
                <div>
                    <p>Bonjour {user.username} :D</p>

                    <Form
                        name="deconnexion"
                        labelCol={{ span: 1 }}
                        wrapperCol={{ span: 4 }}
                        initialValues={{ remember: true }}
                        onFinish={onDeconnect}
                        onFinishFailed={onFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            wrapperCol={{ offset: 0, span: 0 }}
                        >
                            <Button type="primary" htmlType="submit">
                                Se déconnecter
                            </Button>
                        </Form.Item>
                    </Form>
                    <Countries></Countries>
                </div>
            ) : (
                <div>
                    <p> Veuillez renseigner votre pseudo s'il vous plaît :</p>
                    <Form
                        name="connexion"
                        labelCol={{ span: 1 }}
                        wrapperCol={{ span: 4 }}
                        initialValues={{ remember: true }}
                        onFinish={onConnect}
                        onFinishFailed={onFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Pseudo"
                            name="pseudo"
                            rules={[{ required: true, message: "Veuillez renseigner votre pseudo s'il vous plaît !" }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{ offset: 1, span: 0 }}
                        >
                            <Button type="primary" htmlType="submit">
                                Se connecter
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            )}
        </div>
    );
};

export default Home;