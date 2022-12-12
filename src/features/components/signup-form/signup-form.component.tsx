import React from 'react';
import { Button } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';
import StyledContainer from './signup-form.styles';
import { TokenObtainPair } from '../../../swagger2Ts/interfaces';
import FormComponent from '../form/form.component';
import { FieldValues, useForm } from 'react-hook-form';

export interface SignupFormComponentProps {
  onSubmit: (args: FieldValues) => Promise<void>;
}

const SignupFormComponent: React.FC<SignupFormComponentProps> = (props) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({ shouldUnregister: true });

  const onSubmit = async (e: FieldValues) => {
    try {
      await props.onSubmit(e as TokenObtainPair);
    } catch (e: any) {
      Object.keys(e).forEach((name: any) => setError(name, e[name]))
    }
  }


  const getErrorField = (fieldName: string) => {
    const error: any = errors[fieldName];

    if (error) {
      const errorFields = Object.keys(error).map((index) => {
        if (index !== 'ref') {
          return <div key={index}>{error[index]}</div>
        }
        return undefined;
      });
      return <div>{errorFields}</div>;
    }

    return '';
  }

  return (
    <StyledContainer>
      <FormComponent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input {...register('email')} autoFocus required name='email' type="email" placeholder='Sign Up With email' />
            {getErrorField('email')}
          </div>
          <div>
            <input {...register('password')} required name='password' type="password" placeholder='Enter Password' />
            {getErrorField('password')}
          </div>

          <Button type='submit'>
            <GetApp />
            <span>Sign Up</span>
          </Button>
        </form>
      </FormComponent>
    </StyledContainer>
  );
}

export default SignupFormComponent;
