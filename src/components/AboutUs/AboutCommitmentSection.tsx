import React from 'react';

type CardProps = {
  icon: string;
  title: string;
  body: string;
};

const CommitCard: React.FC<CardProps> = ({ icon, title, body }) => (
  <div className="group bg-slate-50 rounded-2xl p-5 md:p-6 anim-card-lift">
    <div>
      <img src={icon} alt="" className="h-10 w-10 object-contain mb-3 anim-icon-bump" />
      <div className="text-blue-900 font-semibold text-lg">{title}</div>
      <p className="mt-2 text-sm text-slate-600">{body}</p>
    </div>
  </div>
);

const AboutCommitmentSection: React.FC = () => {
  const base = process.env.PUBLIC_URL + '/images';
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <h2 className="text-center text-red-700 text-2xl md:text-3xl font-bold">Our Commitment to You</h2>

        <div className="mt-6 md:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 items-start">
          {/* Left column cards */}
          <div className="space-y-4 md:space-y-5">
            <CommitCard
              icon={`${base}/icons/Empowerment.png`}
              title="Empowerment"
              body="We provide you with the knowledge and skills to take control of your career and visa journey."
            />
            <CommitCard
              icon={`${base}/icons/Expertise.png`}
              title="Expertise"
              body="Our advice is grounded in extensive experience and a thorough understanding of the fields we operate in."
            />
          </div>

          {/* Center image */}
          <div className="rounded-2xl overflow-hidden aspect-square">
            <img
              src={`${base}/pics/OurCommitmenttoYou.png`}
              alt="Happy client celebrating with travel documents"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right column cards */}
          <div className="space-y-4 md:space-y-5">
            <CommitCard
              icon={`${base}/icons/Personalization.png`}
              title="Personalization"
              body="Every service is tailored to your specific situation and goals."
            />
            <CommitCard
              icon={`${base}/icons/Results.png`}
              title="Results"
              body="We are driven by a passion for seeing you succeed and helping you achieve your desired outcomes."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCommitmentSection;
