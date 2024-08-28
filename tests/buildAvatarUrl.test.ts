import { buildAvatarUrl } from '../src/buildAvatarUrl';

describe('buildAvatarUrl', () => {
  it('returns empty string when context includes "default"', () => {
    expect(buildAvatarUrl('z default', 'John', 'Doe')).toBe('');
  });

  it('returns URL with initials when context does not include "default"', () => {
    expect(buildAvatarUrl('aa', 'John', 'Doe')).toBe('https://ui-avatars.com/api/?name=J+D');
  });

  it('handles empty first name', () => {
    expect(buildAvatarUrl('aa', '', 'Doe')).toBe('https://ui-avatars.com/api/?name=+D');
  });

  it('handles empty last name', () => {
    expect(buildAvatarUrl('aa', 'John', '')).toBe('https://ui-avatars.com/api/?name=J+');
  });

  it('handles both names empty', () => {
    expect(buildAvatarUrl('aa', '', '')).toBe('https://ui-avatars.com/api/?name=+');
  });

  it('handles null names', () => {
    expect(buildAvatarUrl('aa', null, null)).toBe('https://ui-avatars.com/api/?name=+');
  });

  it('handles undefined names', () => {
    expect(buildAvatarUrl('aa', undefined, undefined)).toBe('https://ui-avatars.com/api/?name=+');
  });
});