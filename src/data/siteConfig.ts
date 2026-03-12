export const siteConfig = {
  siteTitle: 'ACU at NYU',
  manifestName: "Official Website for ACU, NYU's Largest Umbrella Organization",
  manifestShortName: 'Landing',
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: '/',
  heading: 'Asian Cultural Union at NYU',
  subHeading: "NYU's Largest Asian Umbrella Organization",
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'GitHub',
      url: 'https://github.com/acu-nyu',
    },
    {
      icon: 'fa-instagram',
      name: 'Instagram',
      url: 'https://instagram.com/nyu_acu',
    },
    {
      icon: 'fa-facebook',
      name: 'Facebook',
      url: 'https://facebook.com/nyu.acu',
    },
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'mailto:nyuacu0@gmail.com',
    },
  ],
  phone: '000-00000',
  address: 'New York, NY',
} as const;
