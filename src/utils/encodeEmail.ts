export function encodeEmail(email: string) {
  const subEmail = email.split('@');

  if (subEmail[0].length > 3) {
    subEmail[0] = email.substring(0, 3);
  }

  return subEmail[0] + '***';
}
