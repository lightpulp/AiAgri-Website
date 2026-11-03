import type { ReactNode } from 'react';

type NodeReading = { id: number; moisture: number; state: 'Dry' | 'Normal' };
type Item = { icon: string; title: string; text: ReactNode };

const ICONS: Record<string, string> = {
  sun: 'M12 7a5 5 0 100 10 5 5 0 000-10z M12 1v3 M12 20v3 M1 12h3 M20 12h3 M4.2 4.2l2.1 2.1 M17.7 17.7l2.1 2.1 M4.2 19.8l2.1-2.1 M17.7 6.3l2.1-2.1',
  offline: 'M12 2a10 10 0 100 20 10 10 0 000-20z M2 12h20 M12 2c3 3 4 6.5 4 10s-1 7-4 10 M12 2c-3 3-4 6.5-4 10s1 7 4 10 M4 4l16 16',
  radio: 'M12 12m-1.5 0a1.5 1.5 0 103 0 1.5 1.5 0 10-3 0 M12 13.5V22 M7.8 7.8a6 6 0 000 8.4 M16.2 7.8a6 6 0 010 8.4 M4.9 4.9a10 10 0 000 14.2 M19.1 4.9a10 10 0 010 14.2',
  chip: 'M7 7h10v10H7z M10 3v4 M14 3v4 M10 17v4 M14 17v4 M3 10h4 M3 14h4 M17 10h4 M17 14h4',
  clock: 'M12 2a10 10 0 100 20 10 10 0 000-20z M12 6v6l4 2',
  eye: 'M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z M12 9a3 3 0 100 6 3 3 0 000-6z',
  puzzle: 'M4 4h7v4a2 2 0 104 0V4h5v7h-4a2 2 0 100 4h4v5H4z',
  drop: 'M12 3C9 8 6 11 6 15a6 6 0 0012 0c0-4-3-7-6-12z',
  bell: 'M6 16V11a6 6 0 0112 0v5l2 2H4z M10 21h4',
  sprout: 'M12 22V11 M12 11C12 7 9 4 4 4c0 4 3 7 8 7 M12 14c0-3 2-5 6-5 0 3-2 5-6 5',
  tag: 'M3 12l9-9h8v8l-9 9z M16 8h.01',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',
  check: 'M4 12l5 5L20 6',
  wrench: 'M14 6a4 4 0 005 5l-9 9a2.5 2.5 0 01-4-4l9-9z',
};

function Icon({ name, size = 28 }: { name: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={ICONS[name]} />
    </svg>
  );
}

const nodes: NodeReading[] = [
  { id: 1, moisture: 17, state: 'Dry' },
  { id: 2, moisture: 51, state: 'Normal' },
  { id: 3, moisture: 46, state: 'Normal' },
  { id: 4, moisture: 49, state: 'Normal' },
];

const badges: { icon: string; label: string }[] = [
  { icon: 'sun', label: 'Solar-powered' },
  { icon: 'offline', label: 'Works offline' },
  { icon: 'radio', label: 'Long-range LoRa' },
  { icon: 'chip', label: 'Local AI' },
];

const problems: Item[] = [
  { icon: 'clock', title: 'Too much land to walk', text: <>Checking soil, water and animals by hand takes <strong>time and people</strong>.</> },
  { icon: 'eye', title: 'Problems hide', text: <>Dry soil or intruders can go unnoticed <strong>between inspections</strong>.</> },
  { icon: 'puzzle', title: 'Tools work alone', text: <>Sensors, LoRa and RFID exist, but rarely as <strong>one network</strong>.</> },
];

const steps: Item[] = [
  { icon: 'radio', title: 'LoRa connects the land', text: <>Solar nodes send data to <strong>one base station</strong>. No towers or Wi-Fi.</> },
  { icon: 'chip', title: 'AI understands it', text: <>A <strong>small local model</strong> spots abnormal conditions and decides what's next.</> },
  { icon: 'drop', title: 'Automation responds', text: <>Open a valve, <strong>alert the farmer</strong>, or flag it for review.</> },
];

const uses: Item[] = [
  { icon: 'sprout', title: 'Agriculture', text: <><strong>Soil, crops and water</strong> drive irrigation with less waste.</> },
  { icon: 'tag', title: 'Livestock', text: <><strong>RFID tags</strong> track animals. Alerts fire if one leaves the perimeter.</> },
  { icon: 'shield', title: 'Land security', text: <>Motion and vibration sensors flag <strong>unauthorized activity</strong>.</> },
];

const sdgs: { tag: string; name: string; color: string }[] = [
  { tag: 'SDG 2', name: 'Zero Hunger', color: '#dda63a' },
  { tag: 'SDG 6', name: 'Clean Water', color: '#26bde2' },
  { tag: 'SDG 7', name: 'Clean Energy', color: '#fcc30b' },
  { tag: 'SDG 9', name: 'Innovation', color: '#fd6925' },
  { tag: 'SDG 12', name: 'Responsible Use', color: '#bf8b2e' },
  { tag: 'SDG 13', name: 'Climate Action', color: '#3f7e44' },
  { tag: 'SDG 15', name: 'Life on Land', color: '#56c02b' },
];

export default function Home() {
  return (
    <>
      <header className="bar">
        <a className="brand" href="#top"><Icon name="sprout" size={26} /> AiAgri</a>
        <nav aria-label="Sections">
          <a href="#problem">Problem</a>
          <a href="#how">How it works</a>
          <a href="#example">Example</a>
          <a href="#uses">Uses</a>
          <a href="#status">Status</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="sun" aria-hidden="true" />
          <div className="wrap hero-grid">
            <div>
              <h1>Know what every part of your land needs. <span className="hl">No internet required.</span></h1>
              <p className="lede">
                A <strong>solar-powered sensor network</strong> with a <strong>local AI</strong> that watches soil,
                water, animals and boundaries, then decides what happens next.
              </p>
              <div className="cta-row">
                <a className="btn" href="#how">See how it works</a>
                <a className="btn ghost" href="mailto:your@email.com">Ask about a pilot</a>
              </div>
              <p className="note">Prototype in development. Readings shown are examples.</p>
            </div>

            <figure className="plot" aria-label="One hectare split into four zones, each with a sensor node, reporting to a central base station">
              <div className="field">
                {nodes.map((n) => (
                  <div key={n.id} className={'tile ' + (n.state === 'Dry' ? 'dry' : 'ok')}>
                    <span className="chip">Node {n.id}</span>
                    <span className="tile-value">{n.moisture}%</span>
                    <span className="tile-state">{n.state}</span>
                  </div>
                ))}
                <div className="hub"><Icon name="radio" size={22} /><span>Base</span></div>
              </div>
              <figcaption>1 hectare · 4 zones · soil moisture</figcaption>
            </figure>
          </div>
          <svg className="hills" viewBox="0 0 1200 140" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 70 C200 10 380 20 560 60 S 950 110 1200 40 V140 H0z" fill="#8cc36b" />
            <path d="M0 100 C220 50 420 70 620 95 S 980 120 1200 80 V140 H0z" fill="#4f9d4a" />
            <path d="M0 125 C300 95 600 130 900 112 S 1120 108 1200 118 V140 H0z" fill="#2e7d32" />
          </svg>
        </section>

        <section className="badges">
          <div className="wrap badge-row">
            {badges.map((b) => (
              <div key={b.label} className="badge"><Icon name={b.icon} size={26} /><strong>{b.label}</strong></div>
            ))}
          </div>
        </section>

        <section id="problem" className="wrap section">
          <h2>Land is big. <span className="soft">Attention is limited.</span></h2>
          <div className="cols3">
            {problems.map((p) => (
              <article key={p.title} className="card problem">
                <span className="ico"><Icon name={p.icon} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className="band rows">
          <div className="wrap section">
            <h2>From soil reading to action</h2>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className="step-ico"><Icon name={s.icon} size={34} /><b>{i + 1}</b></span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="example" className="wrap section">
          <h2>What a decision looks like</h2>
          <div className="example">
            <article className="tag-card">
              <header><h3>Node 1 · Carrots</h3><span className="pill warn">DRY</span></header>
              <Gauge label="Soil moisture" value={17} warn />
              <dl>
                <dt>Temperature</dt><dd>34.2°C</dd>
                <dt>Humidity</dt><dd>46%</dd>
                <dt>Water level</dt><dd>62%</dd>
              </dl>
              <p className="verdict warn"><Icon name="drop" size={20} /> <strong>Irrigation required</strong></p>
            </article>
            <article className="tag-card">
              <header><h3>Node 2 · Potatoes</h3><span className="pill good">NORMAL</span></header>
              <Gauge label="Soil moisture" value={51} />
              <dl>
                <dt>Temperature</dt><dd>31.8°C</dd>
                <dt>Humidity</dt><dd>59%</dd>
              </dl>
              <p className="verdict good"><Icon name="check" size={20} /> <strong>No irrigation needed</strong></p>
            </article>
          </div>
          <p className="aside">Then it acts: <strong>open a valve</strong>, <strong>alert the farmer</strong> when livestock leaves the perimeter, or when a sensor is tripped.</p>
        </section>

        <section id="uses" className="band">
          <div className="wrap section">
            <h2>One network, several jobs</h2>
            <div className="cols3">
              {uses.map((u, i) => (
                <article key={u.title} className={'use use-' + i}>
                  <span className="use-ico"><Icon name={u.icon} size={34} /></span>
                  <h3>{u.title}</h3>
                  <p>{u.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="soil">
          <div className="wrap section">
            <h2>Built for small farms</h2>
            <div className="facts">
              <p><strong>7.73M</strong> farms in the 2022 Philippine census</p>
              <p><strong>98.8%</strong> smaller than 7 hectares</p>
              <p><strong>55.8%</strong> smaller than half a hectare</p>
              <p><strong>~0.8 ha</strong> average farm size</p>
            </div>
            <p className="src">Source: PSA 2022 Census, via the Department of Agriculture.</p>
          </div>
        </section>

        <section id="goals" className="wrap section">
          <h2>Goals it supports</h2>
          <ul className="sdg">
            {sdgs.map((s) => (
              <li key={s.tag} style={{ borderTopColor: s.color }}>
                <strong>{s.tag}</strong>
                <span>{s.name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="status" className="band">
          <div className="wrap section">
            <h2>Where the project stands</h2>
            <div className="cols2">
              <div className="status ready">
                <h3><Icon name="check" size={22} /> Within reach today</h3>
                <ul>
                  <li><strong>ESP32</strong> microcontrollers</li>
                  <li><strong>LoRa</strong> radios and solar power</li>
                  <li><strong>Sensors, RFID</strong>, pumps and relays</li>
                  <li>Mostly <strong>open-source</strong> parts</li>
                </ul>
              </div>
              <div className="status hard">
                <h3><Icon name="wrench" size={22} /> Still to prove</h3>
                <ul>
                  <li><strong>LoRa mesh</strong> is harder than point-to-point</li>
                  <li><strong>Solar power</strong> for LoRa modules and sensors</li>
                  <li><strong>Field testing</strong> on real farms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-in">
          <strong className="foot-brand"><Icon name="sprout" size={22} /> AiAgri</strong>
          <span>Off-grid monitoring for farms, livestock and protected land.</span>
          <a href="mailto:your@email.com">your@email.com</a>
        </div>
      </footer>
    </>
  );
}

function Gauge({ label, value, warn = false }: { label: string; value: number; warn?: boolean }) {
  return (
    <div className="gauge">
      <div className="gauge-top"><span>{label}</span><strong>{value}%</strong></div>
      <div className="gauge-bar" role="img" aria-label={`${label} ${value} percent`}>
        <span className={warn ? 'fill warn' : 'fill'} style={{ width: value + '%' }} />
      </div>
    </div>
  );
}