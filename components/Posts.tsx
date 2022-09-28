export const items = [
  {
    title: 'Posts',
    links: [
      { href: '/redux-overview', children: '19 Mar 2019 - How does Redux work?' },
      { href: '/crack-wifi-passwords-easy-osx', children: '14 Jun 2018 - Crack Wifi Passwords the Easy Way! (OSX Version)' },
      { href: '/ultrasound-image-processing', children: '11 Jun 2015 - Ultrasound Image Processing' },
      { href: '/session-construct2intro', children: '31 Jan 2015 - Construct 2 [Session]' },
      { href: '/session-gamedevelopment', children: '28 Jan 2015 - Game Development [Session]' },
      { href: '/building-a-line-follower-robot', children: '10 May 2014 - Building a Line Follower Robot' },
    ]
  },
];

export function Posts() {
  return (
    <>
      {items.map((item) => (
        <div key={item.title}>
          <h2>{item.title}</h2>
          <ul>
            {item.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.children}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}