import React from 'react';
import { motion } from 'framer-motion';
import '../styles/History.css';

const History = () => {
  const timelineEvents = [
    {
      year: 1960,
      title: "The First March",
      description: "The Berner Distanzmarsch was founded by Heinz Krähenbühl and Walter Bürki. It began as a military competition combined with the general meeting of the Bern Section of the SVMLT.",
      image: "https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
    },
    {
      year: "1960s",
      title: "Early Development",
      description: "The event lasted from 17:00 on Saturday to 07:00 on Sunday. Only marchers in uniform (military, railway, post office, civil defence, fire brigade, etc.) were permitted.",
      image: "https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
    },
    {
      year: "1980s",
      title: "International Participation",
      description: "A delegation of reservists from the Saarland visited the Bern Distance March, creating a deep comradeship between the Saarland Reservist Association and the Bern Section of the SVMLT.",
      image: "https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
    },
    {
      year: "1990s",
      title: "Evolving Traditions",
      description: "The distance march was separated from the general meeting, breaking with a long-standing tradition but allowing more focus on the march itself.",
      image: "https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
    },
    {
      year: 2000,
      title: "New Leadership",
      description: "Hptm Ruedi Lehmann fought to continue the Berner Distanzmarsch during a critical time when the event's future was uncertain.",
      image: "https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
    },
    {
      year: 2020,
      title: "Remote March",
      description: "During the COVID-19 pandemic, a milestone was achieved with the holding of the Remote March 2020, showcasing the flexibility and commitment of the organizing team.",
      image: "https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
    },
    {
      year: 2025,
      title: "67th Edition",
      description: "The 67th Berne distance march continues the proud tradition, now under the leadership of Hptadj Adrian Venner and his staff.",
      image: "https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
    }
  ];

  return (
    <div className="history-page">
      <div className="page-header">
        <div className="container">
          <h1>History</h1>
          <p>Exploring the rich tradition of the Bernese Distance March</p>
        </div>
      </div>

      <div className="container">
        <div className="history-intro">
          <motion.div
            className="intro-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>The Beginnings</h2>
            <p>
              The Bernese Distance March, originally called the Night March, has its roots in the early 1960s. It was founded by two officers and members of the Bern section of the SVMLT (Swiss Association of Master Technical Troops), Heinz Krähenbühl and Walter Bürki, who are considered the founding fathers of this traditional event.
            </p>
            <p>
              The idea emerged from practical concerns: due to petrol rationing measures at the time, not every Swiss household owned a car. The founders had the innovative idea that the general meeting location of the Bern Section could be reached by all members on foot from home while simultaneously being combined with a military competition.
            </p>
            <p>
              This gave rise to the Berner Distanzmarsch, a tradition that has continued and evolved for over six decades, becoming an important part of Swiss military and cultural heritage.
            </p>
          </motion.div>

          <motion.div
            className="intro-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://www.bernerdm.ch/wp-content/uploads/2024/12/image-1-1024x680.png"
              alt="Historic image of the Bernese Distance March"
            />
          </motion.div>
        </div>

        <div className="timeline-section">
          <h2>Timeline of the Bernese Distance March</h2>
          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <motion.div
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{event.year}</div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  {event.image && (
                    <div className="timeline-image">
                      <img src={event.image} alt={`${event.title} - ${event.year}`} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="traditions-section">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Evolving Traditions
          </motion.h2>

          <div className="traditions-content">
            <motion.div
              className="traditions-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p>
                The conditions of the march have changed over the decades. Originally, the event lasted from 17:00 on Saturday to 07:00 on Sunday, and only marchers in uniform were permitted. Civilian escorts were not allowed, and scoring followed a special scheme where weapons carried and rucksack weight contributed to points.
              </p>
              <p>
                In the 1980s, the march gained an international dimension when a delegation of reservists from the Saarland in Germany participated. This resulted in a deep comradeship and friendship between the Saarland Reservist Association and the Bern Section of the SVMLT, formalized in a sponsorship agreement.
              </p>
              <p>
                A significant change came when the distance march was separated from the general meeting, breaking with a long-standing tradition. This decision was made because many members who completed the march stayed away from the meeting to rest, while those who persevered often fell asleep during proceedings.
              </p>
              <p>
                Throughout its history, the Bernese Distance March has faced challenges and periods of uncertainty. During a critical time when voices called for abandoning the tradition, Hptm Ruedi Lehmann fought for its continuation.
              </p>
              <p>
                Today, under the leadership of Hptadj Adrian Venner and his staff, the long-term continuation of the traditional Berner Distanzmarsch is guaranteed, adapting to new times while preserving the spirit of the founding fathers.
              </p>
            </motion.div>

            <motion.div
              className="traditions-stats"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="stat-card">
                <div className="stat-number">67</div>
                <div className="stat-label">Editions</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">6,000+</div>
                <div className="stat-label">Peak Participants</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Countries Represented</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">65</div>
                <div className="stat-label">Years of Tradition</div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="notable-participants">
          <h2>Notable Participants</h2>
          <div className="participants-grid">
            <motion.div
              className="participant-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="participant-image">
                <img
                  src="https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
                  alt="Paul Fürst"
                />
              </div>
              <h3>Pol Wm Fürst Paul</h3>
              <p className="participant-achievement">Completed ALL distance marches without any gaps</p>
              <p className="participant-description">
                A living example of dedication and loyalty to the tradition of the Bernese Distance March.
              </p>
            </motion.div>

            <motion.div
              className="participant-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="participant-image">
                <img
                  src="https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
                  alt="Heinz Krähenbühl"
                />
              </div>
              <h3>Heinz Krähenbühl</h3>
              <p className="participant-achievement">Co-founder</p>
              <p className="participant-description">
                One of the two founding fathers who initiated the Bernese Distance March in the early 1960s.
              </p>
            </motion.div>

            <motion.div
              className="participant-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="participant-image">
                <img
                  src="https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
                  alt="Ruedi Lehmann"
                />
              </div>
              <h3>Hptm Ruedi Lehmann</h3>
              <p className="participant-achievement">Preservation Leader</p>
              <p className="participant-description">
                Fought in the front line for the continuation of the Berner Distanzmarsch during a critical period.
              </p>
            </motion.div>

            <motion.div
              className="participant-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="participant-image">
                <img
                  src="https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
                  alt="Adrian Venner"
                />
              </div>
              <h3>Hptadj Adrian Venner</h3>
              <p className="participant-achievement">Current Commander</p>
              <p className="participant-description">
                Leading the Bernese Distance March into the future while preserving its rich traditions.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="legacy-section">
          <motion.div
            className="legacy-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>A Living Legacy</h2>
            <p>
              The Bernese Distance March represents more than just a physical challenge—it embodies a living legacy of Swiss military tradition, camaraderie, and adaptability. Through world events, changing times, and evolving social norms, the march has persisted, adapting while maintaining its core spirit.
            </p>
            <p>
              In 2020, the event demonstrated its resilience and innovation by holding a Remote March during the COVID-19 pandemic. This flexibility ensured the tradition continued unbroken despite global challenges.
            </p>
            <p>
              Today, with approximately 600 participants annually, the Bernese Distance March continues to inspire loyalty and interest. The current leadership team remains committed to leading this cherished tradition into a secure future, honoring all those who have contributed to its success over the decades.
            </p>
            <p>
              As we look forward to the 67th edition in 2025, we celebrate not only a physical challenge in the beautiful Swiss landscape but also a rich cultural heritage that connects generations and crosses international boundaries.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default History;