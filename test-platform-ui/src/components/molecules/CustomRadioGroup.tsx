import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { ReactElement } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface IRadioGroup {
  label: string;
  controlName: string;
  options: {
    label: string;
    value: any;
  }[];
}

const CustomRadioGroup = ({
  label,
  controlName,
  options,
}: IRadioGroup): ReactElement => {
  const { control } = useFormContext();

  return (
    <FormControl>
      <Typography className="font-semibold">{label}</Typography>
      <Controller
        name={controlName}
        control={control}
        render={({ field }) => (
          <RadioGroup row {...field}>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default CustomRadioGroup;
