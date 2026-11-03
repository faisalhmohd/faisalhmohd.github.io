import React, { useContext, useState } from 'react';
import { CursorAnimationContext } from '../Contexts/CursorAnimationProvider';
import Link from '../Link';
import FulflldWordmark from './logos/fulflld.png';
import OptimizelyWordmark from './logos/optimizely.svg';
import MercedesWordmark from './logos/mercedes-f1.svg';
import WebableWordmark from './logos/webable.png';
import EmiratesWordmark from './logos/emirates.svg';
import YasWordmark from './logos/yas.svg';
import UaeEmblem from './logos/uae-armed-forces.svg';
import NewscredWordmark from './logos/newscred.svg';
import CodesignWordmark from './logos/codesign.svg';

const workItems = [
  {
    link: "https://www.fulflld.com/",
    company: 'FULFLLD',
    theme: 'work-section-item-fulflld',
    wordmark: FulflldWordmark,
    wordmarkStyle: 'fulflld',
    title: 'Director of Engineering',
    time: '2022 - Present'
  },
  {
    link: "https://www.optimizely.com/",
    company: 'Optimizely',
    theme: 'work-section-item-optimizely',
    wordmark: OptimizelyWordmark,
    wordmarkStyle: 'optimizely',
    title: 'Manager, Software Engineer',
    time: '2022 - 2025'
  },
  {
    link: "https://www.crbnd.com/",
    company: 'CRBND',
    theme: 'work-section-item-crbnd',
    title: 'Co-Founder & CTO',
    time: '2017 - 2020'
  },
  {
    link: "https://www.newscred.com/",
    company: 'NewsCred',
    theme: 'work-section-item-welcome',
    wordmark: NewscredWordmark,
    wordmarkStyle: 'newscred',
    title: 'Software Engineer',
    time: '2017 - 2021'
  },
  {
    link: "https://www.mercedesamgf1.com/en/",
    company: 'Mercedes-AMG Petronas F1 Team',
    theme: 'work-section-item-mercedes',
    wordmark: MercedesWordmark,
    wordmarkStyle: 'mercedes',
    title: 'Simulation Engineer',
    time: '2013 - Present'
  },
  {
    link: "https://co.design",
    company: 'CoDesign',
    theme: 'work-section-item-codesign',
    wordmark: CodesignWordmark,
    wordmarkStyle: 'codesign',
    title: 'Technology Lead',
    time: '2016 - 2017'
  },
  {
    link: "https://webable.digital",
    company: 'WebAble Digital',
    theme: 'work-section-item-webable',
    wordmark: WebableWordmark,
    wordmarkStyle: 'webable',
    title: 'Lead Developer',
    time: '2014 - 2016'
  },
  {
    link: "https://www.emirates.com",
    company: 'Emirates',
    theme: 'work-section-item-emirates',
    wordmark: EmiratesWordmark,
    wordmarkStyle: 'emirates',
    title: 'Aircraft Maintenance Engineer',
    time: '2012 - 2013'
  },
  {
    link: "https://www.yasmarinacircuit.com",
    company: 'Yas Marina Circuit',
    theme: 'work-section-item-yas',
    wordmark: YasWordmark,
    wordmarkStyle: 'yas',
    title: 'Team Principal & Race Driver',
    time: '2012 - 2019'
  },
  {
    link: "https://mod.gov.ae/",
    company: 'UAE Armed Forces',
    theme: 'work-section-item-uae',
    wordmark: UaeEmblem,
    wordmarkStyle: 'uae',
    title: 'Junior Corporal',
    time: '2011 - 2012'
  }
];

function Work() {
  const CursorAnimation = useContext(CursorAnimationContext);
  const [loadedWordmarks, setLoadedWordmarks] = useState({});

  return (
    <div className="work-section">
      <div className="work-section-heading"  {...CursorAnimation.getProps('work-section-heading')}>
        <h2>Work</h2>
        <h1>Amazing Teams I have been a part of.</h1>
      </div>

      <div className="work-section-items">
        {workItems.map(work => (
          <div className="work-section-item" key={work.company}>
            <Link
              href={work.link}
              onMouseEnter={() => CursorAnimation.setCurrentSection(work.theme)}
              onMouseLeave={() => CursorAnimation.setCurrentSection('')}
              onFocus={() => CursorAnimation.setCurrentSection(work.theme)}
              onBlur={() => CursorAnimation.setCurrentSection('')}
            >
              <h1
                className={`company-name${work.wordmark && loadedWordmarks[work.company] ? ' has-wordmark' : ''}`}
                aria-label={work.company}
              >
                <span className="company-name-text" aria-hidden="true">{work.company}</span>
                {work.wordmark && (
                  <span className={`company-wordmark company-wordmark-${work.wordmarkStyle}`} aria-hidden="true">
                    <img
                      src={work.wordmark}
                      alt=""
                      onLoad={() => setLoadedWordmarks(loaded => ({ ...loaded, [work.company]: true }))}
                      onError={() => setLoadedWordmarks(loaded => ({ ...loaded, [work.company]: false }))}
                    />
                  </span>
                )}
              </h1>
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
