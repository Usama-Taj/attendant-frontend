import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Center } from 'shared-styles/Grid.styles';
import { Input, Button, Form } from 'antd';
import { LoginCard, LoginForm } from './Login.styles';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { loginSchema } from './validation';
import { ILoginFormFields } from 'types';
import { yupResolver } from '@hookform/resolvers/yup';
import useSWR from 'swr';
import { setEmployeeFirstLogin } from 'api/employee.api';
const { Item: FormItem } = Form;
const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const { data: mutationResponse, mutate } = useSWR(
    () => username,
    setEmployeeFirstLogin,
    {
      onSuccess(data, key, config) {
        console.log(
          '🚀 ~ file: Login.tsx:18 ~ const{data:mutationResponse,mutate}=useSWR ~ config',
          config
        );
        console.log(
          '🚀 ~ file: Login.tsx:18 ~ const{data:mutationResponse,mutate}=useSWR ~ key',
          key
        );
        console.log(
          '🚀 ~ file: Login.tsx:18 ~ const{data:mutationResponse,mutate}=useSWR ~ data',
          data
        );
      },
    }
  );

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginFormFields>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data: ILoginFormFields) => {
    setUsername(data.username);
    navigate('/pin-confirmation');
  };
  return (
    <Center>
      <LoginCard title="ATTENDANT LOGIN">
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <FormItem
            help={errors?.username && errors.username.message}
            validateStatus={errors?.username && 'error'}
          >
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input
                  placeholder="Enter username"
                  suffix={<UserOutlined />}
                  {...field}
                />
              )}
            />
          </FormItem>
          <FormItem
            help={errors?.password && errors.password.message}
            validateStatus={errors?.password && 'error'}
          >
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input.Password placeholder="Enter PIN Code" {...field} />
              )}
            />
          </FormItem>
          <Button htmlType="submit" type="primary">
            LOGIN
          </Button>
        </LoginForm>
      </LoginCard>
    </Center>
  );
};

export default Login;
