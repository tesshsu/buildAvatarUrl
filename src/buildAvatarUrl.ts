type Name = string | null | undefined;

const getInitial = (name: Name): string => 
  name?.[0]?.toUpperCase() ?? '';

const createAvatarUrl = (initials: string): string =>
  `https://ui-avatars.com/api/?name=${initials}`;

export const buildAvatarUrl = (
  context: string,
  firstName: Name,
  lastName: Name
): string => {
  if (context.includes('default')) return '';

  const initials = `${getInitial(firstName)}+${getInitial(lastName)}`;
  return createAvatarUrl(initials);
};