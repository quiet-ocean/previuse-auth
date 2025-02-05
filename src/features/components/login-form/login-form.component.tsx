import React, { useState } from 'react';
import { Button, InputAdornment, TextField, Tooltip } from '@material-ui/core';
import { Visibility, Email, GetApp, WarningRounded, VisibilityOff } from '@material-ui/icons';
import { FieldValues, useForm } from 'react-hook-form';

import StyledContainer from './login-form.styles';
import { TokenObtainPair } from '../../../swagger2Ts/interfaces';
import FormComponent from '../form/form.component';
import ButtonComponent from '../button/button.component';
import { getErrorField } from '../../../utils/general-utils';

export interface LoginFormComponentProps {
  onSubmit: (args: TokenObtainPair) => void;
  submitText: string;
}

const LoginFormComponent: React.FC<LoginFormComponentProps> = (props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

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

  const onTogglePassword = () => setShowPassword(!showPassword);

  return (
    <StyledContainer>
      <FormComponent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('email')}
            autoFocus
            required
            name='email'
            type="email"
            placeholder='Sign Up With email'
            className={errors.email ? 'error' : undefined}
            fullWidth
            InputProps={{
              disableUnderline: true,
              endAdornment: errors.email && (
                <InputAdornment position="end">
                  <Tooltip title={getErrorField('email', errors)}><WarningRounded className='error-icon' /></Tooltip>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment position='start' className='input-icon'>
                  <ButtonComponent type='icon' iconElement={<Email />} />
                </InputAdornment>
              )
            }}
          />

          <TextField
            {...register('password')}
            required
            name='password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Enter Password'
            className={errors.password ? 'error' : undefined}
            fullWidth
            InputProps={{
              disableUnderline: true,
              endAdornment: errors.password && (
                <InputAdornment position="end">
                  <Tooltip title={getErrorField('password', errors)}><WarningRounded className='error-icon' /></Tooltip>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment position='start' className='input-icon'>
                  <ButtonComponent
                    type='icon'
                    iconElement={showPassword ? <VisibilityOff /> : <Visibility />}
                    onClick={onTogglePassword}
                  />
                </InputAdornment>
              )
            }}
          />

          <Button type='submit'>
            <GetApp />
            <span>{props.submitText}</span>
          </Button>
        </form>
      </FormComponent>
    </StyledContainer>
  );
}

export default LoginFormComponent;
