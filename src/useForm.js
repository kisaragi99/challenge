import { useState, useEffect } from 'react';

const useForm = (getBooks, validate) => {
  const [values, setValues] = useState({
    order: 'relevance',
    category: 'all',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // if there is no errors and handle submit was invoked we invoke getBooks with form data.
  // Then we rewrite values state with same fiedls. So select values will not change in ui.
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      getBooks(values);
      setValues({
        order: values.order,
        category: values.category,
      });
      setIsSubmitting(false);
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues((vals) => ({ ...vals, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
