// avatarBuilder.ts

function buildAvatarUrl(context: string, firstName: string, lastName: string): string {
    if (context.includes('default')) {
      return '';
    }
  
    const firstInitial = firstName ? firstName[0].toUpperCase() : '';
    const lastInitial = lastName ? lastName[0].toUpperCase() : '';
    const initials = `${firstInitial}+${lastInitial}`;
  
    return `https://ui-avatars.com/api/?name=${initials}`;
  }