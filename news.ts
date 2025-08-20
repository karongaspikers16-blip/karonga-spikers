export interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string;
}

export const newsArticles: Article[] = [
  {
    id: 1,
    title: 'Karonga Spikers Secure Sponsorship Deal with Local Business',
    excerpt:
      "The club has announced a major sponsorship deal with Karonga Trading Company that will support team operations for the next three seasons.",
    date: 'June 2, 2024',
    author: 'Club Management',
    category: 'Announcements',
    image: '/images/news/sponsorship.jpg',
    content: `<p>We are thrilled to announce that Karonga Spikers Volleyball Club has secured a significant sponsorship deal with Karonga Trading Company, one of the region's most respected businesses.</p>

<p>The three-year agreement will provide essential funding for team operations, including equipment, travel expenses, and youth development programs. This partnership marks a major milestone in our club's history and will help us compete at the highest level.</p>

<p>"This sponsorship represents a tremendous vote of confidence in our vision for Karonga Spikers," said Club President Thomas Nyirenda. "With this support, we can focus on building a stronger team while also expanding our community outreach programs."</p>

<p>Karonga Trading Company's CEO, Mrs. Elizabeth Mwanza, expressed enthusiasm about the partnership: "We believe in supporting local sports and the positive impact the Karonga Spikers have on our community. We're proud to be associated with a team that represents our region with such dedication and skill."</p>

<p>The new partnership will see the Karonga Trading Company logo featured on team jerseys starting with our next match against Mzuzu Hammers on June 15.</p>`,
  },
  {
    id: 2,
    title: "Team Captain Wins National Player of the Month Award",
    excerpt:
      "Our team captain, James Banda, has been recognized as the National Volleyball League's Player of the Month for his outstanding performances.",
    date: 'May 25, 2024',
    author: 'Coaching Staff',
    category: 'Awards',
    image: '/images/news/player-award.jpg',
    content: `<p>It is with great pride that we announce our team captain, James Banda, has been named the National Volleyball League's Player of the Month for May 2024.</p>

<p>James has been in exceptional form, leading our team to four victories in five matches during the month. His statistics speak for themselves: an average of 18 points per match, a 62% attack success rate, and 15 service aces across all matches.</p>

<p>The national selection committee highlighted James's leadership both on and off the court as key factors in their decision. His ability to rally the team during crucial moments and his mentorship of younger players were specifically mentioned in the award citation.</p>

<p>"I'm honored to receive this recognition, but volleyball is a team sport," James said when accepting the award. "This belongs to everyone at Karonga Spikers who works hard every day to make us better. I'm just fortunate to play alongside such talented teammates."</p>

<p>James will be presented with the award before our next home match. Please join us in congratulating him on this well-deserved achievement!</p>`,
  },
  {
    id: 3,
    title: 'Youth Volleyball Camp Announced for July School Break',
    excerpt:
      'Karonga Spikers will host a week-long volleyball camp for local youth during the upcoming school break, with coaching from our first team players.',
    date: 'May 18, 2024',
    author: 'Youth Development Team',
    category: 'Community',
    image: '/images/news/youth-camp.jpg',
    content: `<p>Karonga Spikers Volleyball Club is excited to announce our annual Youth Volleyball Camp, scheduled for July 8-12 during the school break.</p>

<p>The camp will be open to boys and girls aged 10-16 and will take place at Karonga Stadium from 9:00 AM to 3:00 PM each day. Participants will receive instruction from our first team players and coaching staff, focusing on fundamental volleyball skills, teamwork, and game strategy.</p>

<p>"Developing the next generation of volleyball players is a core part of our club's mission," said Head Coach Michael Phiri. "This camp is a fantastic opportunity for young people to learn the sport in a fun, supportive environment while also staying active during their school break."</p>

<p>The camp fee is 5,000 MWK per participant, which includes daily lunch, a camp t-shirt, and a volleyball. Scholarships are available for families in need of financial assistance.</p>

<p>Registration is limited to 50 participants to ensure quality instruction. Interested families can register at the club office or through our website.</p>`,
  },
  {
    id: 4,
    title: 'Karonga Spikers to Represent Northern Region in National Cup',
    excerpt:
      'After winning
