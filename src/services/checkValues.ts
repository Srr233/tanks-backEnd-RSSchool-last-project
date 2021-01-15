const checkValues = (login: string, password: string): boolean => {
  if (!login || !password) return false;
  return true;
}
export default checkValues;