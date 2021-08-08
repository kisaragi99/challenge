import { useState, useEffect } from 'react';

const useForm = (setData, validate) => {
  const [values, setValues] = useState({
    order: 'relevance',
    elements: '10',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setData(values);
      setValues({
        order: values.order,
        elements: values.elements,
      });
      console.log(values);
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    if (event.target.type === 'checkbox') {
      setValues((vals) => ({ ...vals, [event.target.name]: event.target.checked }));
    } else {
      setValues((vals) => ({ ...vals, [event.target.name]: event.target.value }));
    }
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
