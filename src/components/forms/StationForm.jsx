import * as Yup from 'yup';
import { useContext } from 'react';
import { useFormik } from 'formik';
import { Button, Text, TextInput, Title } from '@tremor/react';
import { DashboardContext } from '../../context/DashboardContext';

const StationForm = () => {
  const { setStationCode } = useContext(DashboardContext);

  const formik = useFormik({
    initialValues: {
      stationCode: '',
    },
    validationSchema: Yup.object({
      stationCode: Yup.string()
        .max(4, 'Should be 4 characters in length')
        .required('Required'),
    }),
    onSubmit: (values) => {
      setStationCode(values.stationCode);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-1">
        <Title htmlFor="stationCode">
          Station Code<sup>*</sup>
        </Title>
        <div className="flex gap-2">
          <TextInput
            id="stationCode"
            name="stationCode"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Type here..."
            required
            value={formik.values.stationCode}
          />
          <Button color="black" type="submit">
            Submit
          </Button>
        </div>
        {formik.touched.stationCode && formik.errors.stationCode ? (
          <Text className="text-red-500">
            <sup>*</sup>
            {formik.errors.stationCode}
          </Text>
        ) : null}
      </div>
    </form>
  );
};

export default StationForm;
