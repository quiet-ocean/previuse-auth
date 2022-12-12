import React from 'react';

import {
  Button,
  InputAdornment,
  TextField,
  Tooltip
} from '@material-ui/core';

import { GetApp, WarningRounded } from '@material-ui/icons';
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
      return Object.keys(error).map((index) => {
        if (index !== 'ref') {
          return <div key={index}>{error[index]}</div>
        }
        return undefined;
      });
    }

    return '';
  }

  return (
    <StyledContainer>
      <FormComponent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextField
              {...register('email')}
              autoFocus
              required
              name='email'
              type="email"
              placeholder='Sign Up With email'
              fullWidth
              InputProps={{
                disableUnderline: true,
                endAdornment: errors.email && (
                  <InputAdornment position="end">
                    <Tooltip title={getErrorField('email')}><WarningRounded /></Tooltip>
                  </InputAdornment>
                ),
              }}
            />

            {}
          </div>
          <div>
            <TextField
              {...register('password')}
              required
              name='password'
              type="password"
              placeholder='Enter Password'
              fullWidth
              InputProps={{
                disableUnderline: true,
                endAdornment: errors.password && (
                  <InputAdornment position="end">
                    <Tooltip title={getErrorField('password')}><WarningRounded /></Tooltip>
                  </InputAdornment>
                ),
              }}
            />
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
