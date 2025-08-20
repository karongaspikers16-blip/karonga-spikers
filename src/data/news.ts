export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image?: string;
  author: string;
  featured?: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Karonga Spikers Win Regional Championship',
    excerpt: 'Our team dominated the regional finals with an outstanding performance, securing our place in the national league.',
    content: 'In an exhilarating display of skill and teamwork, Karonga Spikers emerged victorious in the regional championship finals held last weekend. The team showcased exceptional performance throughout the tournament, defeating three top-ranked teams to claim the title. This victory marks a significant milestone for the club and secures our promotion to the national league for the upcoming season.',
    date: '2024-01-15',
    category: 'Tournament',
    author: 'Sports Desk',
    featured: true
  },
  {
    id: '2',
    title: 'New Training Facility Opens',
    excerpt: 'State-of-the-art training facility now open to support our athletes development and performance.',
    content: 'We are thrilled to announce the opening of our new state-of-the-art training facility. Equipped with the latest volleyball training technology, the facility includes multiple courts, fitness areas, and recovery zones. This investment demonstrates our commitment to providing the best possible environment for our athletes to develop their skills and reach their full potential.',
    date: '2024-01-10',
    category: 'Club News',
    author: 'Management Team'
  },
  {
    id: '3',
    title: 'Youth Academy Recruitment Drive',
    excerpt: 'Join our youth academy and train with the best coaches in the region. Open trials this month!',
    content: 'Karonga Spikers Youth Academy is launching its annual recruitment drive. Young athletes aged 12-18 are invited to attend open trials throughout this month. Our academy has a proven track record of developing talented players who go on to represent the senior team and compete at national levels. Don\'t miss this opportunity to train with experienced coaches and join our winning program.',
    date: '2024-01-08',
    category: 'Youth Program',
    author: 'Youth Development Team'
  },
  {
    id: '4',
    title: 'Sponsor Partnership Announcement',
    excerpt: 'Exciting new partnership with leading local businesses to support our growth and community initiatives.',
    content: 'We are proud to announce a new partnership with several leading local businesses who will become official sponsors of Karonga Spikers. This partnership will provide crucial support for our team\'s growth, community outreach programs, and youth development initiatives. We thank our new sponsors for their commitment to local sports and look forward to a successful collaboration.',
    date: '2024-01-05',
    category: 'Sponsors',
    author: 'Marketing Team'
  },
  {
    id: '5',
    title: 'Player Spotlight: Sarah Mwale',
    excerpt: 'Meet our star libero whose defensive skills have been crucial to our recent success.',
    content: 'This month we shine the spotlight on Sarah Mwale, our exceptional libero whose defensive prowess has been instrumental in our recent victories. Sarah\'s dedication, quick reflexes, and strategic thinking have earned her recognition as one of the top defensive players in the league. Her journey from youth academy to becoming a key player for the senior team is an inspiration to all aspiring athletes.',
    date: '2024-01-03',
    category: 'Player Profile',
    author: 'Media Team'
  },
  {
    id: '6',
    title: 'Community Outreach Program Success',
    excerpt: 'Our recent community volleyball clinics reached over 200 children in local schools.',
    content: 'Karonga Spikers\' community outreach program has achieved remarkable success this quarter. Our team of coaches and players conducted volleyball clinics in 15 local schools, reaching over 200 children aged 8-16. The program aims to promote sports participation, healthy lifestyles, and teamwork among youth in our community. We are grateful for the positive response and look forward to expanding this initiative.',
    date: '2023-12-28',
    category: 'Community',
    author: 'Community Team'
  }
];
