import { FieldErrors } from "react-hook-form";

export const getErrorField = (fieldName: string, fieldErrors: FieldErrors) => {
  const error: any = fieldErrors[fieldName];

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