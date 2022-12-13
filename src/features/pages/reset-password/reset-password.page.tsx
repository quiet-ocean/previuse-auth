import React, { Dispatch, useContext, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { RouteChildrenProps } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, InputAdornment, TextField, Tooltip } from '@material-ui/core';
import { Visibility, VisibilityOff, WarningRounded } from '@material-ui/icons';

import {
  StyledContainer,
  StyledWrapper,
  StyledTitle
} from './reset-password.styles';

import { RootState } from '../../../common/models';
import { ResetPasswordConfirmAction } from '../../../common/state/auth/auth.actions';
import { PasswordResetConfirm } from '../../../swagger2Ts/interfaces';
import { IServices } from '../../../common/services/initiate';
import { ServicesContext } from '../../../common/contexts';
import FormComponent from '../../components/form/form.component';
import ButtonComponent from '../../components/button/button.component';
import { getErrorField } from '../../../utils/general-utils';

export interface ResetPasswordPageProps {
  resetPassword: (args: PasswordResetConfirm) => Promise<void>;
}

const ResetPasswordPage: React.FC<RouteChildrenProps & ResetPasswordPageProps> = (props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const paths = window.location.pathname.split('/').filter(t => t);
  const uid = paths[paths.length - 2];
  const token = paths[paths.length - 1];

  const services: IServices | undefined = useContext(ServicesContext);

  if (!services) return null;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({ shouldUnregister: true });

  const onTogglePassword = () => setShowPassword(!showPassword);

  const onSubmit = async (e: FieldValues) => {
    try {
      const payload: PasswordResetConfirm = {
        new_password: e.new_password,
        uid,
        token
      }

      await props.resetPassword(payload);
      services.snackbar.actions.open({ content: 'Password changed successfuly' });
    } catch (e: any) {
      Object.keys(e).forEach((name: any) => setError(name, e[name]));
      services.snackbar.actions.open({ content: 'Error changing password', type: 'error' });
    }
  }

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledTitle>Reset Password</StyledTitle>
        <FormComponent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register('new_password')}
              required
              name='new_password'
              type={showPassword ? 'text' : 'password'}
              placeholder='Enter Password'
              className={errors.password ? 'error' : undefined}
              fullWidth
              InputProps={{
                disableUnderline: true,
                endAdornment: errors.new_password && (
                  <InputAdornment position="end">
                    <Tooltip title={getErrorField('new_password', errors)}><WarningRounded className='error-icon' /></Tooltip>
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
              <span>Change Password</span>
            </Button>
          </form>
        </FormComponent>
      </StyledWrapper>
    </StyledContainer>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
  resetPassword: bindActionCreators(ResetPasswordConfirmAction, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(ResetPasswordPage);
