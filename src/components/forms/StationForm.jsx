import * as Yup from 'yup';
import { useContext } from 'react';
import { useFormik } from 'formik';
import { Button, Text, TextInput } from '@tremor/react';
import { HiSearch } from 'react-icons/hi';
import { DashboardContext } from '../../context/DashboardContext';

const StationForm = () => {
  const { setStationCode } = useContext(DashboardContext);

  const formik = useFormik({
    initialValues: {
      stationCode: '',
    },
    validationSchema: Yup.object({
      stationCode: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      setStationCode(values.stationCode);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-1">
        <Text htmlFor="stationCode">Station Code</Text>
        <div className="flex gap-2">
          <TextInput
            icon={HiSearch}
            id="stationCode"
            name="stationCode"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Search..."
            required
            value={formik.values.stationCode}
            error={formik.errors.stationCode}
          />
          <Button color="black" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default StationForm;
