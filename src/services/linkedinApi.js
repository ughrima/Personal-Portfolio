export const fetchLinkedInData = async () => {
  try {
    const linkedinUrl = 'https://www.linkedin.com/in/agrima-jain-/';
    
    return {
      profileUrl: linkedinUrl,
      name: 'Agrima Jain',
      title: 'AI & Tech Developer',
      location: 'Dehradun, India',
      connections: '500+',
      note: 'LinkedIn API access is restricted. For real-time data, consider using LinkedIn\'s official API or a third-party service with proper authentication.'
    };
  } catch (error) {
    console.error('Error fetching LinkedIn data:', error);
    return null;
  }
};

