export function encodeEmail(email: string) {
  const subEmail = email.substring(0, 3);

  return subEmail + '***';
}
