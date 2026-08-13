export type Project = {
  title: string
  category: string
  image: string
  variant?: 'wide'
  video?: string
}

export type Service = {
  title: string
  points: string[]
  image: string
}

export const navLinks = [
  { label: 'Projects', href: '#work' },
  { label: 'Contact us', href: '#contact' },
]

export const heroLogos = [
  '/scalo/Bruschetta.jpg',
  '/rethink/main.jpg',
  'https://cdn.sanity.io/images/y63jgrcb/production/bc41b7f7da44c76ea2fbaa985982917c3c44bf15-127x127.jpg?w=200&auto=format',
  '/jewellery/Ring .jpg',
]

export const projectFilters = [
  'All',
  'IT Solutions Marketing',
  'Short Video Content Creation',
  'Bank & Finance',
  'Blockchain',
  'Education',
  'E-Commerce',
  'Food & Drinks',
  'Healthcare',
  'Home Remodeling',
  'UX/UI',
  'E-Bikes',
  'Logistics',
  'Roofing Services',
  'Jewellery',
  'Immigration',
  'Industry',
]

export const projects: Project[] = [
  { title: 'Scalo Restaurant', category: 'Food & Drinks', image: '/scalo/hero-section.png', video: '/scalo/hero-video.mp4' },
  { title: 'Imperial Branding Agency', category: 'Short Video Content Creation', image: '/luis/hero image.png?v=2', video: '/luis/hero video.mp4' },
  { title: 'The Forsted Vault', category: 'Jewellery', image: '/jewellery/Mockup.jpg', video: '/jewellery/faith.mp4' },
  { title: 'Replug', category: 'E-Commerce', image: '/replug/hero image.jpg', video: '/replug/hero image.mp4' },
  { title: 'Limco Logistics', category: 'Logistics', image: '/limco/hero image.jpg?v=2', video: '/limco/hero video.mp4' },
  { title: 'JRC Home Remodeling', category: 'Home Remodeling', image: '/jrc/hero image.webp', video: '/jrc/hero video.mp4' },
  { title: 'Rethink UX/UI Studio', category: 'UX/UI', image: '/rethink/main.jpg', video: '/rethink/hero-video.mp4' },
  { title: 'Khalsa Immigration', category: 'Immigration', image: '/khalsa/hero image.jpg', video: '/khalsa/hero video.mp4' },
  { title: 'Falco Power E-Drive', category: 'E-Bikes', image: '/falco/hero-secti.png?v=2', video: '/falco/hero-video.mp4' },
  { title: 'Fibax Pharma', category: 'Healthcare', image: '/fibax/hero image.jpg', video: '/fibax/hero video.mp4' },
  { title: 'Emmbros Autocomp', category: 'Industry', image: '/emmbros/hero image.png?v=2', video: '/emmbros/hero video.mp4' },
  { title: 'Get Set Go Digital', category: 'IT Solutions Marketing', image: '/getsetgo/hero image .png?v=2', video: '/getsetgo/hero video .mp4' },
  { title: 'Roofing Bucks County', category: 'Roofing Services', image: '/roofing/hero image.png?v=2', video: '/roofing/hero video.mp4' },
  { title: 'Arvind Herbal Labs', category: 'Animal Health', image: '/arvind/hero image.webp' },
  { title: 'Resolute', category: 'Software', image: 'https://cdn.sanity.io/images/y63jgrcb/production/17f7c3a240de7f47698952ce2c9ed3df48817a41-2400x1802.jpg?w=750&auto=format' },
  { title: 'Daml', category: 'Bank & Finance', image: 'https://cdn.sanity.io/images/y63jgrcb/production/3b405cf3349ed85abe4537e4846845303eb61cca-2400x1802.jpg?w=750&auto=format' },
  { title: '56K Cloud', category: 'Software', image: 'https://cdn.sanity.io/images/y63jgrcb/production/e5b92be564115b738f8956f40bc8c1b0551587f9-2000x1500.jpg?w=750&auto=format' },
  { title: 'Good Use', category: 'Software', image: 'https://cdn.sanity.io/images/y63jgrcb/production/7284a1c86e2a88c768a6b7557c3349a2fa5b9a89-2400x1800.jpg?w=750&auto=format' },
  { title: 'Kargo', category: 'Logistics', image: 'https://cdn.sanity.io/images/y63jgrcb/production/c28a63801cc0e6649246ac62d1e2fed400dd934a-1520x1140.jpg?w=750&auto=format' },
]

export const services: Service[] = [
  {
    title: 'Branding.',
    points: ['Identity systems', 'Brand strategy', 'Art direction', 'Guidelines'],
    image: 'https://cdn.sanity.io/images/y63jgrcb/production/ee926af91bb1f15108e53b0b52ad90af551936d1-2000x1500.jpg?w=750&auto=format',
  },
  {
    title: 'Web Design.',
    points: ['Figma design', 'User experience', 'Interface systems', 'Interactive prototyping'],
    image: 'https://cdn.sanity.io/images/y63jgrcb/production/63ba7eb7c5c2ad23b8f441927b947f5a611393a2-2000x1500.jpg?w=750&auto=format',
  },
  {
    title: 'Development.',
    points: ['React & Next.js', 'Creative front-end', 'API integrations', 'Performance optimization'],
    image: 'https://cdn.sanity.io/images/y63jgrcb/production/862294da9406b208416239a338d0c8e7aa74e449-2000x1500.jpg?w=750&auto=format',
  },
  {
    title: 'Craft & Jewelry.',
    points: ['3D Modeling & CAD', 'Exquisite stone curation', 'Bespoke hand-finishing', 'Custom master craftsmanship'],
    image: '/jewellery/Mockup.jpg',
  },
]

export const teamFaces = [
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=150&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
]

export const processSteps = [
  { title: 'Discover', description: 'Understand goals, audience, and context.' },
  { title: 'Design', description: 'Create focused visuals aligned with brand direction.' },
  { title: 'Refine', description: 'Polish details through structured review rounds.' },
  { title: 'Deliver', description: 'Ship final assets optimized for every surface.' },
]

export const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '2000+', label: 'Creative Assets' },
  { value: '60+', label: 'Brand Campaigns' },
  { value: '8', label: 'Core Disciplines' },
]
