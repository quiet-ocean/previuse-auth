import React from 'react';
import { Button, InputAdornment, TextField, Tooltip } from '@material-ui/core';
import { Email, GetApp, WarningRounded } from '@material-ui/icons';
import { FieldValues, useForm } from 'react-hook-form';

import { SendEmailReset } from '../../../swagger2Ts/interfaces';
import { getErrorField } from '../../../utils/general-utils';
import ButtonComponent from '../button/button.component';
import FormComponent from '../form/form.component';
import StyledContainer from './send-email-form.styles';

export interface ChangePasswordFormComponentProps {
  onSubmit: (args: SendEmailReset) => Promise<void>;
}

const SendEmailFormComponent: React.FC<ChangePasswordFormComponentProps> = (props) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({ shouldUnregister: true });

  const onSubmit = async (e: FieldValues) => {
    try {
      await props.onSubmit(e as SendEmailReset);
    } catch (e: any) {
      Object.keys(e).forEach((name: any) => setError(name, e[name]))
    }
  }

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
            placeholder='Enter your email'
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

          <Button type='submit'>
            <GetApp />
            <span>Send Email</span>
          </Button>
        </form>
      </FormComponent>
    </StyledContainer>
  );
}

export default SendEmailFormComponent;