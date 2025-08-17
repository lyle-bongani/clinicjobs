import React from 'react';
import Reveal from '../common/Reveal';

const services = [
  {
    title: 'Expert CVs',
    desc: 'Stand out to global employers with ATS-friendly CVs.',
    icon: '/images/icons/Expert CVs.png',
    multiline: false,
  },
  {
    title: 'Personalized Coaching',
    desc: 'Master job search strategies & interview prep.',
    icon: '/images/icons/Personalized Coaching.png',
    multiline: false,
  },
  {
    title: 'Visa Assistance',
    desc: [
      'Work Visas (UK, Canada, Australia, USA, Europe)',
      'Visitor & Holiday Visas (including Schengen)',
      'Dependent Visas (spouse, children)',
      'Visa Checklists & Document Reviews',
      'Application Coaching & Submission',
    ],
    icon: '/images/icons/Visa Assistance.png',
    multiline: true,
  },
  {
    title: 'Travel Support',
    desc: 'Seamless transition with flight & accommodation help.',
    icon: '/images/icons/Travel Support.png',
    multiline: false,
  },
];

const HomeOurServices: React.FC = () => (
  <section className="w-full py-12 bg-white">
    {/* Top BG image (full width, no radius, fixed height) */}
    <div className="hidden md:block w-full relative z-0 overflow-hidden" style={{marginBottom: '-5rem', position: 'relative'}}>
      <img
        src={process.env.PUBLIC_URL + '/images/pics/ourservicesbg.jpg'}
        alt="Our Services Banner"
        className="w-full h-[70vh] object-cover shadow-none"
      />
    </div>
    {/* Main Card */}
    <div className="w-full px-4 sm:px-6 mx-auto max-w-none md:max-w-7xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-stretch overflow-hidden z-10 relative anim-card-lift mt-0 md:-mt-24">
      {/* Left: Card Image with blue bg */}
      <Reveal variant="left" className="hidden md:block md:flex-1">
        <div className="w-full max-w-xl md:flex-1 md:max-w-none mx-auto flex items-stretch justify-center p-0 bg-[#dbeafe] min-h-[26rem] md:min-h-[32rem] h-full rounded-t-2xl md:rounded-l-2xl md:rounded-t-none overflow-hidden">
          <img
            src={process.env.PUBLIC_URL + '/images/pics/ourservicescard.jpg'}
            alt="Our Services Card"
            className="object-cover object-center w-full h-full rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
            style={{objectPosition: 'center'}}
          />
        </div>
      </Reveal>
      {/* Right: Services Grid */}
      <Reveal variant="right" className="md:flex-1">
        <div className="w-full md:flex-1 md:max-w-none flex flex-col items-center justify-center p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8 w-full md:max-w-4xl mx-auto">
            {services.map((service, idx) => (
              <Reveal key={service.title} variant="up" delayMs={idx * 120}>
                <div
                  className="group relative flex flex-col items-center justify-start bg-white border border-blue-700 rounded-2xl pt-9 pb-4 px-4 min-h-[168px] h-full text-center anim-card-lift w-full"
                >
                  {/* Overlapping icon without circle background */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <img src={process.env.PUBLIC_URL + service.icon} alt={service.title + ' icon'} className="w-12 h-12 object-contain anim-icon-bump" />
                  </div>
                  <div className="font-bold text-blue-900 text-lg mb-1 mt-0">{service.title}</div>
                  {service.multiline ? (
                    <div className="text-gray-700 text-[11px] mt-0.5 text-center md:text-left w-full max-w-xs mx-auto leading-relaxed">
                      {(service.desc as string[]).map((line, lineIdx) => (
                        <div key={lineIdx}>{`• ${line}`}</div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-gray-700 text-[13px] leading-relaxed px-1">{service.desc}</div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default HomeOurServices;
