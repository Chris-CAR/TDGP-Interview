export default function getInitials(name: string) {
  let initials = '';

  const names = name.split(' ');
  if (names.length > 1) {
    initials += names[0].charAt(0) + names[names.length - 1].charAt(0);
  } else {
    initials += names[0].charAt(0);
  }

  return initials.toUpperCase();
}
