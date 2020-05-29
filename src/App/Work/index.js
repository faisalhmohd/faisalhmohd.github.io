import React, { useContext } from 'react';
import { CursorAnimationContext } from '../Contexts/CursorAnimationProvider';
import Link from '../Link';

const workItems = [
  {
    link: "https://www.crbnd.com/",
    company: 'CRBND',
    title: 'Co-Founder & CTO',
    time: '2017 - Present'
  },
  {
    link: "https://www.newscred.com/",
    company: 'NewsCred',
    title: 'Software Engineer',
    time: '2017 - Present'
  },
  {
    link: "https://www.mercedesamgf1.com/en/",
    company: 'Mercedes-AMG Petronas F1 Team',
    title: 'Media Engineer',
    time: '2013 - Present'
  },
  {
    link: "https://codesign.com.bd",
    company: 'CoDesign',
    title: 'Technology Lead',
    time: '2016 - 2017'
  },
  {
    link: "https://webable.digital",
    company: 'WebAble Digital',
    title: 'Lead Developer',
    time: '2014 - 2016'
  },
  {
    link: "https://www.emirates.com",
    company: 'Emirates',
    title: 'Aircraft Maintenance Engineer',
    time: '2012 - 2013'
  },
  {
    link: "https://www.yasmarinacircuit.com",
    company: 'Yas Marina Circuit',
    title: 'Team Principal & Race Driver',
    time: '2012 - 2019'
  },
  {
    link: "https://mod.gov.ae/",
    company: 'UAE Armed Forces',
    title: 'Junior Corporal',
    time: '2011 - 2012'
  }
];

function Work() {
  const CursorAnimation = useContext(CursorAnimationContext);

  return (
    <div className="work-section">
      <div className="work-section-heading"  {...CursorAnimation.getProps('work-section-heading')}>
        <h2>Work</h2>
        <h1>Amazing Teams I have been a part of.</h1>
      </div>

      <div className="work-section-items" {...CursorAnimation.getProps('work-section-item')}>
        {workItems.map(work => (
          <div className="work-section-item" key={work.title}>
            <Link href={work.link}>
              <h1 className="company-name">{work.company}</h1>
              <h1>{work.title}</h1>
              <h2>{work.time}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;