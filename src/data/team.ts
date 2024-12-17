export interface TeamMember {
  name: string;
  role: string;
  email: string;
  imageUrl: string;
}

export const teamData = {
  facultyAdvisor: {
    name: 'Mr. Ashish Mishra',
    role: 'Faculty Advisor',
    email: 'Mishra.Ashish@mail.jiit.ac.in',
    imageUrl: '/src/components/Ashsih mishra.png',
  },
  seniorAdvisor: {
    name: 'Dr. Jane Smith',
    role: 'Senior Advisor',
    email: 'jane.smith@university.edu',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
  },
  coreTeam: {
    president: {
      name: 'Alex Johnson',
      role: 'President',
      email: 'alex.j@university.edu',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80',
    },
    vicePresident: {
      name: 'Sarah Williams',
      role: 'Vice President',
      email: 'sarah.w@university.edu',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    },
    generalSecretary: {
      name: 'Michael Brown',
      role: 'General Secretary',
      email: 'michael.b@university.edu',
      imageUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    },
    heads: {
      management: {
        name: 'Emily Davis',
        role: 'Management Head',
        email: 'emily.d@university.edu',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80',
      },
      marketing: {
        name: 'David Wilson',
        role: 'Marketing Head',
        email: 'david.w@university.edu',
        imageUrl:
          'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80',
      },
      technical: [
        {
          name: 'Chris Anderson',
          role: 'Technical Head',
          email: 'chris.a@university.edu',
          imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80',
        },
        // Add more technical heads
      ],
      digital: [
        {
          name: 'Rachel Green',
          role: 'Digital Head',
          email: 'rachel.g@university.edu',
          imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
        },
        // Add second digital head
      ],
    },
  },
};
