import React from 'react';

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
    <div className="w-full relative z-0 overflow-hidden" style={{marginBottom: '-5rem', position: 'relative'}}>
      <img
        src={process.env.PUBLIC_URL + '/images/pics/ourservicesbg.jpg'}
        alt="Our Services Banner"
        className="w-full h-[70vh] object-cover shadow-none"
        style={{objectPosition: 'center', zIndex: 1, borderRadius: 0}}
      />
    </div>
    {/* Main Card */}
    <div className="container mx-auto bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden z-10 relative" style={{marginTop: '-6rem'}}>
      {/* Left: Card Image with blue bg */}
      <div className="flex-1 flex items-stretch justify-center p-0 bg-[#dbeafe] min-h-[26rem] md:min-h-[32rem] rounded-l-2xl">
        <img
          src={process.env.PUBLIC_URL + '/images/pics/ourservicescard.jpg'}
          alt="Our Services Card"
          className="object-cover w-full h-full rounded-l-2xl"
          style={{objectPosition: 'top'}}
        />
      </div>
      {/* Right: Services Grid */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 w-full max-w-2xl">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative flex flex-col items-center justify-start bg-white border border-blue-700 rounded-2xl pt-10 pb-4 px-6 min-h-[180px] h-full text-center"
            >
              {/* Overlapping icon without circle background */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center">
                <img src={process.env.PUBLIC_URL + service.icon} alt={service.title + ' icon'} className="w-12 h-12 object-contain" />
              </div>
              <div className="font-bold text-blue-900 text-lg mb-1 mt-0">{service.title}</div>
              {service.multiline ? (
                <div className="text-gray-700 text-[11px] mt-0.5 text-left w-full max-w-xs mx-auto leading-relaxed">
                  {(service.desc as string[]).map((line, idx) => (
                    <div key={idx}>{`• ${line}`}</div>
                  ))}
                </div>
              ) : (
                <div className="text-gray-700 text-[13px] leading-relaxed px-1">{service.desc}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HomeOurServices;
