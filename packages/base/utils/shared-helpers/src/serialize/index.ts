import stringify from 'json-stringify-safe';

const serialize = (value: unknown) => {
  return typeof value === 'string' || typeof value === 'undefined' ? value : stringify(value);
};

export default serialize;
