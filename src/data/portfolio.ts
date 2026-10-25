export interface ProjectStory {
  id: string;
  name: string;
  meta: string;
  hook: string;
  big: string;
  bigCaption: string;
  brief: string;
  did: Array<{ title: string; body: string }>;
  result: string;
  credits: string[];
  logo: string;
  brand: string[];
  link?: string;
  linkLabel?: string;
}

export interface Beat {
  when: string;
  org: string;
  role: string;
  logoText?: string;
  logoImg?: string;
  body: string;
  shot?: {
    src: string;
    alt: string;
    caption: string;
    halo?: boolean;
    w?: number;
    h?: number;
  };
  ctas?: Array<{ label: string; href: string }>;
  links?: Array<{ label: string; href: string }>;
  crafts?: string[];
  posts?: Array<{
    title: string;
    platform: string;
    note: string;
    href: string;
    img?: string;
    tint?: { bg: string; ink: string };
  }>;
}

export interface FilmShort {
  id?: string;
  title: string;
  note: string;
  href: string;
  img: string;
}

export const portfolioData = {
  intro: {
    title: 'Balaji L. · Portfolio',
    hint: 'Click to roll',
  },
  nav: {
    scenes: [
      'SC 01 · Title card',
      'SC 02 · The work',
      'SC 03 · Backstory',
      'SC 04 · Films',
      "SC 05 · That's a wrap",
    ],
  },
  hero: {
    eyebrow: 'Filmmaker · {Director}',
    lead: 'Stories first. Cinema always.',
    intro:
      'I am Balaji L., a filmmaker, writer, director, and assistant director based in Coimbatore. With a foundation in Computer Science Engineering and hands-on experience across independent short films, Malayalam feature film production, and Tamil vertical web series, I craft narratives with deliberate pacing, emotional gravity, and visual discipline.',
  },
  showreel: {
    title: 'Showreel',
    meta: 'Cinematic Reel · Sound on',
    slate: 'Scene 01 · Take 01',
    poster: '/images/hero-poster.png',
  },
  crafts: [
    'Screenwriting',
    'Dialogue Writing',
    'Story Direction',
    'Assistant Direction',
    'Continuity Awareness',
    'On-Set Coordination',
    'Actor Auditions',
    'Dubbing Supervision',
    'Production Assistance',
    'Premiere Pro',
    'CapCut',
    'Vertical Series',
    'Commercial Adfilms',
  ],
  work: {
    heading: 'The work',
    label: 'Selected Filmography & Directorial Works',
    readMore: 'Read the story',
    situation: 'The Vision & Scope',
    did: 'What I brought to set',
    result: 'The Output & Impact',
    projects: [
      {
        id: 'kaagangal',
        name: 'Kaagangal',
        meta: 'Independent Short Film · Writer & Director',
        hook: 'An original independent short film exploring human fragility and silent emotional undercurrents.',
        big: 'Writer{·}Director',
        bigCaption: 'End-to-end creative authorship from screenplay to screen',
        brief:
          'Taking complete responsibility for conceptualizing, writing, and directing an independent cinematic short film, navigating character arcs, atmospheric tone, and visual storytelling.',
        did: [
          {
            title: 'Screenplay & Character Psychology',
            body: 'Authored the full script with emphasis on naturalistic dialogue, subtext, and pacing that allows dramatic moments room to breathe.',
          },
          {
            title: 'Actor Auditions & Direction',
            body: 'Handpicked actors through audition sessions, conducted character prep, and directed subtle performance nuances during production.',
          },
          {
            title: 'Visual Framing & On-Set Execution',
            body: 'Collaborated with the cinematographer on lens choices, camera movement, and lighting moods to capture evocative visual texture.',
          },
        ],
        result:
          'A complete directorial signature piece that demonstrated my ability to guide actors, manage production constraints, and translate written emotions into evocative cinema.',
        credits: ['Story', 'Screenplay', 'Dialogue', 'Direction', 'Casting'],
        logo: '/images/kaagangal-cover.png',
        brand: ['#d23a2e', '#ff8f85'],
        linkLabel: 'DIRECTORIAL WORK',
      },
      {
        id: 'ring',
        name: 'RING',
        meta: 'Malayalam Feature Film · Assistant Director',
        hook: 'Contributed as Assistant Director on a Malayalam feature film set, managing production coordination and narrative continuity.',
        big: 'Feature{·}Film',
        bigCaption: 'High-stakes Malayalam cinema production workflow',
        brief:
          'Working in the core directorial department of a full-length feature film in Malayalam cinema, orchestrating on-set department communications, managing schedules, and safeguarding continuity.',
        did: [
          {
            title: 'Department Head Interfacing',
            body: 'Served as an active link between the Director, Cinematographer, Art Director, and Costume team to ensure shared vision across setups.',
          },
          {
            title: 'Continuity & Script Supervision',
            body: 'Maintained strict scene continuity logs, screen direction, prop placement, and costume fidelity across demanding multi-day shoots.',
          },
          {
            title: 'On-Set Floor Management',
            body: 'Assisted in briefing actors, managing call times, staging background crowd movement, and maintaining shooting momentum.',
          },
        ],
        result:
          'Mastered large-scale feature film production mechanics, departmental hierarchy, and the precision required to deliver a feature-length cinematic vision.',
        credits: ['Assistant Direction', 'Set Continuity', 'Production Support', 'Actor Coordination'],
        logo: '/images/ring-cover.png',
        brand: ['#c08537', '#e6b062'],
        linkLabel: 'FEATURE FILM',
      },
      {
        id: 'anjathe',
        name: 'Anjathe',
        meta: 'Tamil Vertical Web Series · Assistant Director',
        hook: 'A gripping Tamil episodic vertical web series designed specifically for mobile-first cinematic engagement.',
        big: 'Vertical{·}Series',
        bigCaption: '9:16 vertical storytelling for modern digital viewers',
        brief:
          'Assistant Director on "Anjathe", a cutting-edge vertical series that demanded a rethinking of composition, eyelines, and pacing to captivate viewers on smartphone displays.',
        did: [
          {
            title: 'Vertical Framing Dynamics',
            body: 'Collaborated on camera blocking specifically tailored to 9:16 aspect ratios, optimizing vertical depth and intimate character focus.',
          },
          {
            title: 'Fast-Paced Episodic Staging',
            body: 'Ensured high-intensity emotional hooks and punchy scene transitions to keep mobile audiences hooked between short episodes.',
          },
          {
            title: 'Dubbing & Audio Sync Coordination',
            body: 'Supervised actor voice dubbing sessions to lock in crisp dialogue clarity and emotional weight for headphones and phone speakers.',
          },
        ],
        result:
          'A popular Tamil vertical series that achieved strong audience retention and positive engagement across modern mobile streaming platforms.',
        credits: ['Assistant Direction', '9:16 Staging', 'Dubbing Supervision', 'Episode Continuity'],
        logo: '/images/anjathe-cover.png',
        brand: ['#ff5537', '#ff9a6b'],
        link: 'https://www.instagram.com/reel/DQ11EjKk6x1/?psln=MTM3ZDhuOXhyZnk2eQ==',
        linkLabel: 'WATCH ON INSTAGRAM',
      },
      {
        id: 'tom-sakthi',
        name: 'Tom & Sakthi',
        meta: 'Tamil Vertical Web Series · Assistant Director',
        hook: 'A relatable character-driven vertical web series exploring relational chemistry and urban humor.',
        big: 'Episodic{·}Craft',
        bigCaption: 'Character chemistry, rhythm, and nuanced performance',
        brief:
          'Serving as Assistant Director on "Tom & Sakthi", focusing on relationship dynamics, organic conversational flow, and tight shoot turnaround schedules.',
        did: [
          {
            title: 'Rehearsals & Actor Collaboration',
            body: 'Worked closely with the lead cast during line readings and scene rehearsals to capture natural banter and emotional cadence.',
          },
          {
            title: 'Shot Lists & Daily Call Execution',
            body: 'Maintained shooting schedules, supervised prop continuity, and tracked script variations across multiple episode blocks.',
          },
          {
            title: 'Post-Production Support',
            body: 'Assisted the editorial team in review cut evaluations, ensuring episodic continuity remained tight and entertaining.',
          },
        ],
        result:
          'A warmly received vertical web series that highlighted the potential of episodic digital storytelling with charming performances.',
        credits: ['Assistant Direction', 'Continuity', 'Actor Chemistry', 'On-set Coordination'],
        logo: '/images/tom-sakthi-cover.png',
        brand: ['#3d6bff', '#8fa9ff'],
        link: 'https://www.instagram.com/reel/DUukxvVk7NC/?obrf=MTI5bGlhdnAyMjF6Mg==',
        linkLabel: 'WATCH ON INSTAGRAM',
      },
      {
        id: '7screen-adfilmz',
        name: '7Screen Adfilmz',
        meta: 'Commercials & Creative Content · Assistant Director',
        hook: 'High-impact commercial advertisements, brand reels, and promotional video content for business campaigns.',
        big: 'Commercial{·}Ads',
        bigCaption: 'Brand storytelling, swift turnarounds, and visual impact',
        brief:
          'Assisting in the direction and production of commercial advertisements and creative video content at 7Screen Adfilmz, delivering punchy narratives for commercial clients.',
        did: [
          {
            title: 'Commercial Visual Staging',
            body: 'Executed sleek product reveals, crisp brand messaging, and vibrant visual treatments tailored for social media campaigns.',
          },
          {
            title: 'Location & Talent Coordination',
            body: 'Managed location scouting logistics, equipment schedules, and on-set talent coordination to ensure shooting ran without delays.',
          },
          {
            title: 'Brand Reel Concepting',
            body: 'Assisted in shaping concepts that bridge entertaining storytelling with memorable brand value propositions.',
          },
        ],
        result:
          'Commercial advertisements and social content campaigns that elevated client awareness and generated robust digital impressions.',
        credits: ['Commercial Direction', 'Production Assistance', 'Brand Messaging', 'Creative Content'],
        logo: '/images/7screen-adfilmz-cover.png',
        brand: ['#d7f53c', '#ecfba0'],
        link: 'https://www.instagram.com/reel/DUqcC95kwoR/?exln=MXdlZWZseGpoMGhqOA==',
        linkLabel: 'WATCH ON INSTAGRAM',
      },
    ],
    numbersLabel: 'The numbers',
    stats: [
      { n: '5{+}', p: 'Feature, web series & film productions' },
      { n: '100K{+}', p: 'Collective video impressions & views' },
      { n: '4', p: 'Years bridging engineering & cinematic craft' },
      { n: '7.0', p: 'B.E. Computer Science CGPA / 10' },
      { n: '15{+}', p: 'Commercial & short visual projects' },
    ],
  },
  story: {
    heading: 'The backstory',
    label: 'From Engineering to Cinema',
    beats: [
      {
        when: '2020 – 2024',
        org: 'Nehru Institute of Tech',
        role: 'B.E. Computer Science Engineering',
        logoText: 'NIT',
        body: 'Built an engineering foundation in Computer Science at Nehru Institute of Technology, Coimbatore (CGPA 7.0/10). Developed analytical problem-solving, structured project execution, and disciplined technical rigor—all while relentlessly writing screenplays, studying global cinema, and collaborating with fellow creators.',
        links: [{ label: 'See the films', href: '#films' }],
      },
      {
        when: 'Directorial Work',
        org: 'Kaagangal',
        role: 'Writer & Director',
        logoText: 'KG',
        body: 'Wrote and directed "Kaagangal", taking ownership of original story development, scene-by-scene script crafting, casting, on-set direction, and editorial vision. A pivotal project establishing my personal voice in character-focused drama.',
        shot: {
          src: '/images/kaagangal-cover.png',
          alt: 'Kaagangal Short Film cover',
          caption: 'Kaagangal — Written and Directed by Balaji L.',
          halo: false,
          w: 1200,
          h: 675,
        },
        links: [{ label: 'View project details', href: '#work' }],
      },
      {
        when: 'Feature Cinema',
        org: 'RING',
        role: 'Assistant Director · Malayalam Feature Film',
        logoText: 'RING',
        body: 'Joined the core direction team on the Malayalam feature film "RING". Handled on-set coordination, monitored script continuity across complex multi-cam setups, and worked directly alongside seasoned film technicians and actors.',
        shot: {
          src: '/images/ring-cover.png',
          alt: 'RING Malayalam Feature Film Poster',
          caption: 'On the sets of RING — Malayalam feature film production.',
          halo: true,
          w: 1200,
          h: 675,
        },
        ctas: [{ label: 'Explore filmography', href: '#films' }],
      },
      {
        when: 'Vertical Series',
        org: 'Anjathe',
        role: 'Assistant Director · Tamil Vertical Web Series',
        logoText: 'AJ',
        body: 'Contributed as Assistant Director on "Anjathe", an innovative vertical series optimized for 9:16 mobile displays. Managed on-set continuity, scene blocking, and actor voice dubbing sync.',
        posts: [
          {
            title: 'Anjathe',
            platform: 'Instagram',
            note: 'Tamil vertical web series reel',
            href: 'https://www.instagram.com/reel/DQ11EjKk6x1/?psln=MTM3ZDhuOXhyZnk2eQ==',
            img: '/images/anjathe-cover.png',
          },
        ],
        links: [{ label: 'The full story', href: '#work' }],
      },
      {
        when: 'Episodic Drama',
        org: 'Tom & Sakthi',
        role: 'Assistant Director · Tamil Vertical Web Series',
        logoText: 'TS',
        body: 'Assistant Director on "Tom & Sakthi", an episodic vertical series exploring emotional chemistry and urban relationship dynamics. Oversaw daily shooting schedules, continuity, and actor performance coordination.',
        posts: [
          {
            title: 'Tom & Sakthi',
            platform: 'Instagram',
            note: 'Tamil vertical web series reel',
            href: 'https://www.instagram.com/reel/DUukxvVk7NC/?obrf=MTI5bGlhdnAyMjF6Mg==',
            img: '/images/tom-sakthi-cover.png',
          },
        ],
        links: [{ label: 'The full story', href: '#work' }],
      },
      {
        when: 'Branded Content',
        org: '7Screen Adfilmz',
        role: 'Assistant Director · Commercials & Award Shows',
        logoText: '7S',
        body: 'Contributed across multiple commercial projects at 7Screen Adfilmz, as well as serving as Show Assistant Director and PR Team member for the 7 Star Awards 2025 in Coimbatore.',
        posts: [
          {
            title: '7Screen Adfilm',
            platform: 'Instagram',
            note: 'Commercial ad production',
            href: 'https://www.instagram.com/reel/DUqcC95kwoR/?exln=MXdlZWZseGpoMGhqOA==',
            img: '/images/7screen-adfilmz-cover.png',
          },
          {
            title: 'Viswak Adfilm',
            platform: 'Instagram',
            note: 'Brand creative visual reel',
            href: 'https://www.instagram.com/reel/DRM0lehk3yG/?xtok=d3F4ZXRtbXMwcWNw',
            img: '/images/viswak-adfilm-cover.png',
          },
          {
            title: '7 Star Awards',
            platform: 'Instagram',
            note: 'Show AD & PR Reel · 2025',
            href: 'https://www.instagram.com/reel/DS983Jhko3K/?obrf=MWozZ3BzczJnMTdocA==',
            img: '/images/7star-awards-cover.png',
          },
        ],
        crafts: [
          'Screenwriting',
          'Dialogue Writing',
          'Direction',
          'Assistant Direction',
          'Continuity',
          'Auditions',
          'Dubbing',
          'Premiere Pro',
          'CapCut',
        ],
      },
    ],
  },
  films: {
    heading: 'Films',
    label: 'On screen & behind it',
    feature: {
      title: 'RING · Malayalam Feature Film',
      note: 'Feature film production · Assistant Director',
      href: '#work',
      img: '/images/ring-cover.png',
    },
    shorts: [
      {
        title: 'Kaagangal',
        note: 'Short Film · Writer & Director',
        href: '#work',
        img: '/images/kaagangal-cover.png',
      },
      {
        title: 'Anjathe',
        note: 'Tamil Vertical Web Series · Assistant Director',
        href: 'https://www.instagram.com/reel/DQ11EjKk6x1/?psln=MTM3ZDhuOXhyZnk2eQ==',
        img: '/images/anjathe-cover.png',
      },
      {
        title: 'Tom & Sakthi',
        note: 'Tamil Vertical Web Series · Assistant Director',
        href: 'https://www.instagram.com/reel/DUukxvVk7NC/?obrf=MTI5bGlhdnAyMjF6Mg==',
        img: '/images/tom-sakthi-cover.png',
      },
      {
        title: '7Screen Adfilmz',
        note: 'Commercial Ad Film · Assistant Director',
        href: 'https://www.instagram.com/reel/DUqcC95kwoR/?exln=MXdlZWZseGpoMGhqOA==',
        img: '/images/7screen-adfilmz-cover.png',
      },
      {
        title: 'Viswak Adfilm',
        note: 'Creative Branded Video · Assistant Director',
        href: 'https://www.instagram.com/reel/DRM0lehk3yG/?xtok=d3F4ZXRtbXMwcWNw',
        img: '/images/viswak-adfilm-cover.png',
      },
      {
        title: '7 Star Awards 2025',
        note: 'Show Assistant Director & PR Team',
        href: 'https://www.instagram.com/reel/DS983Jhko3K/?obrf=MWozZ3BzczJnMTdocA==',
        img: '/images/7star-awards-cover.png',
      },
    ],
  },
  closing: {
    label: "That's a wrap",
    title: "Let's make\n{the next one}",
    resume: 'Download Resume',
  },
  footer: {
    left: 'Balaji L. · Filmmaker, Writer & Director',
    right: '© 2026 · Coimbatore, Tamil Nadu, India',
  },
  contacts: {
    email: 'directorlbalaji@gmail.com',
    phone: '+91 93605 92959',
    whatsapp: 'https://wa.me/919360592959',
    youtube: 'https://youtu.be/QzVDUKczDpk',
    instagram: 'https://www.instagram.com/lbalaji16/',
    linkedin: 'https://www.linkedin.com/in/balaji-l-filmmaker/',
    location: 'Coimbatore, Tamil Nadu, India',
  },
};
