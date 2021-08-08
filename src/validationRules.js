export default function validate(values) {
  const errors = {};

  if (!values.search) {
    errors.search = 'Type something!';
  } else if (values.search.length > 50) {
    errors.search = 'Book name must be less than 50 characters!';
  }

  return errors;
}
