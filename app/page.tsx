const nodes = [
  { id: 1, crop: 'Carrots', moisture: 17, state: 'Dry' },
  { id: 2, crop: 'Potatoes', moisture: 51, state: 'Normal' },
  { id: 3, crop: 'Example', moisture: 46, state: 'Normal' },
  { id: 4, crop: 'Example', moisture: 49, state: 'Normal' },
];

const problems = [
  {
    title: 'Too much land to walk',
    text: 'Farmers, livestock managers and land administrators oversee large areas. Checking soil, water, animals and boundaries by hand takes time and people.',
  },
  {
    title: 'Problems hide between inspections',
    text: 'Dry soil, abnormal conditions, animals moving, or someone entering the land can go unnoticed until the next round.',
  },
  {
    title: 'The tools exist, but they work alone',
    text: 'IoT sensors, LoRa, RFID and solar devices are usually deployed for one purpose each. Few tie the whole land into one monitoring network.',
  },
];

const steps = [
  { title: 'LoRa connects the land', text: 'Solar-powered sensor nodes in each zone send small packets over long-range radio to one base station. No cell tower or Wi-Fi needed.' },
  { title: 'AI understands the data', text: 'A small model running on the base station reads the structured readings, spots abnormal conditions and decides what needs to happen.' },
  { title: 'Automation responds', text: 'Open an irrigation valve, alert the farmer, or flag something for a person to review.' },
];

const uses = [
  { title: 'Agriculture', text: 'Soil moisture, crop conditions and water levels drive irrigation, with less water wasted.' },
  { title: 'Livestock', text: 'RFID tags track marked animals. Sensors watch feed, water and activity, and an alert fires if an animal leaves the perimeter.' },
  { title: 'Wildlife and land security', text: 'Motion, vibration, sound or camera sensors report unauthorized activity across a protected area.' },
];

const sdgs = [
  ['SDG 2', 'Zero Hunger', 'Soil monitoring, automated irrigation, crop and livestock management.'],
  ['SDG 6', 'Clean Water and Sanitation', 'Water-level and soil-moisture monitoring cut water waste.'],
  ['SDG 7', 'Affordable and Clean Energy', 'Solar-powered nodes run completely off-grid.'],
  ['SDG 9', 'Industry, Innovation and Infrastructure', 'LoRa networking, decentralized infrastructure and local AI.'],
  ['SDG 12', 'Responsible Consumption and Production', 'Sensor-based management reduces water and feed waste.'],
  ['SDG 13', 'Climate Action', 'Environmental monitoring, water conservation and solar energy.'],
  ['SDG 15', 'Life on Land', 'Wildlife tracking, habitat monitoring and intrusion detection.'],
];

export default function Home() {
  return (
    <>
      <header className="bar">
        <a className="brand" href="#top">AiAgri</a>
        <nav aria-label="Sections">
          <a href="#problem">Problem</a>
          <a href="#how">How it works</a>
          <a href="#example">Example</a>
          <a href="#uses">Uses</a>
          <a href="#goals">Goals</a>
          <a href="#status">Status</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy">
            <h1>Know what every part of your land needs, without the internet.</h1>
            <p className="lede">
              AiAgri is a solar-powered sensor network with a local AI agent. Nodes watch the soil, water,
              animals and boundaries. The base station decides what happens next.
            </p>
            <div className="cta-row">
              <a className="btn" href="#how">See how it works</a>
              <a className="btn ghost" href="mailto:your@email.com">Ask about a pilot</a>
            </div>
            <p className="note">Prototype in development. Readings shown here are examples.</p>
          </div>

          <figure className="plot" aria-label="One hectare split into four quadrants, each with a sensor node reporting to a central base station">
            <div className="grid">
              {nodes.map((n) => (
                <div key={n.id} className={'tile ' + (n.state === 'Dry' ? 'dry' : 'ok')}>
                  <span className="tile-name">Node {n.id}</span>
                  <span className="tile-value">{n.moisture}%</span>
                  <span className="tile-state">{n.state}</span>
                </div>
              ))}
              <div className="hub"><span>Base station</span></div>
            </div>
            <figcaption>One hectare, four zones, one base station. Soil moisture per node.</figcaption>
          </figure>
        </section>

        <section id="problem" className="wrap section">
          <h2>Land is big. Attention is limited.</h2>
          <div className="cols3">
            {problems.map((p) => (
              <div key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className="band">
          <div className="wrap section">
            <h2>From soil reading to action</h2>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className="step-n">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
            <p className="aside">
              Without the AI layer, the network only collects and forwards data. With it, the base station
              interprets the data and decides what should happen next. It runs a small model on modest hardware
              and works from structured sensor readings, not a cloud server.
            </p>
          </div>
        </section>

        <section id="example" className="wrap section">
          <h2>What the decision looks like</h2>
          <div className="example">
            <div className="ex-card">
              <h3>Node 1 · Carrot crops</h3>
              <dl>
                <dt>Soil moisture</dt><dd>17%</dd>
                <dt>Temperature</dt><dd>34.2°C</dd>
                <dt>Humidity</dt><dd>46%</dd>
                <dt>Water level</dt><dd>62%</dd>
              </dl>
              <p className="verdict warn">Soil is dry. Irrigation required.</p>
            </div>
            <div className="ex-card">
              <h3>Node 2 · Potato crops</h3>
              <dl>
                <dt>Soil moisture</dt><dd>51%</dd>
                <dt>Temperature</dt><dd>31.8°C</dd>
                <dt>Humidity</dt><dd>59%</dd>
              </dl>
              <p className="verdict good">Soil is normal. No irrigation needed.</p>
            </div>
          </div>
          <p className="aside">
            What happens next depends on the application: open an irrigation valve automatically, alert the
            farmer when livestock leaves the perimeter, or alert the farmer when someone trips a sensor.
          </p>
        </section>

        <section id="uses" className="band">
          <div className="wrap section">
            <h2>One network, several jobs</h2>
            <div className="cols3 ruled">
              {uses.map((u) => (
                <div key={u.title}>
                  <h3>{u.title}</h3>
                  <p>{u.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap section">
          <h2>Built for small farms</h2>
          <div className="facts">
            <p><strong>7.73M</strong> farms in the 2022 Philippine census</p>
            <p><strong>98.8%</strong> are smaller than 7 hectares</p>
            <p><strong>55.8%</strong> are smaller than half a hectare</p>
            <p><strong>~0.8 ha</strong> average farm size</p>
          </div>
          <p className="aside">
            Source: Philippine Statistics Authority 2022 Census, as reported by the Department of Agriculture.
            A one-hectare, four-zone layout matches the scale most Filipino farmers actually work at.
          </p>
        </section>

        <section id="goals" className="band">
          <div className="wrap section">
            <h2>Sustainable Development Goals it supports</h2>
            <ul className="sdg">
              {sdgs.map(([tag, name, how]) => (
                <li key={tag}>
                  <span className="sdg-tag">{tag}</span>
                  <span><strong>{name}.</strong> {how}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="status" className="wrap section">
          <h2>Where the project stands</h2>
          <div className="cols2">
            <div>
              <h3>What is already within reach</h3>
              <p>
                ESP32-class microcontrollers, LoRa radios, solar power, environmental sensors, RFID, pumps and
                relays are mature and easy to get. None of the core parts need exotic hardware, and most of the
                materials in the concept are open source.
              </p>
            </div>
            <div>
              <h3>What is still hard</h3>
              <p>
                A LoRa mesh is harder to build than simple point-to-point links. Running LoRa modules and sensors
                on solar power also needs careful design. These are the next things to prove in the field.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-in">
          <strong>AiAgri</strong>
          <span>Off-grid monitoring and decisions for farms, livestock and protected land.</span>
          <a href="mailto:rbrian1105@gmail.com">rbrian1105@gmail.com</a>
        </div>
      </footer>
    </>
  );
}
