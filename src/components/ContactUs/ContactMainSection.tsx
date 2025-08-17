import React from 'react';
// MUI Icons (requires @mui/icons-material installed)
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const InfoCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div className="group rounded-[20px] border border-slate-300 p-4 md:p-5 flex items-start gap-4 bg-white transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)] hover:border-blue-200 focus-within:-translate-y-1 focus-within:shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
    <div className="h-14 w-14 rounded-xl bg-blue-900 text-white grid place-content-center leading-none flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
      {icon}
    </div>
    <div className="flex-1">
      <div className="text-slate-900 text-xl md:text-2xl font-semibold leading-tight">{title}</div>
      <div className="text-sm md:text-[13px] text-slate-700 leading-snug mt-2">
        {children}
      </div>
    </div>
  </div>
);

const ContactMainSection: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto max-w-screen-2xl px-4 py-10 md:py-14">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Let's Start Your Journey Together</h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base">We're here to help you take the next step in your career or immigration journey. Please feel free to get in touch with us using the options below.</p>
        </div>

        <div className="mt-0 grid grid-cols-1 lg:[grid-template-columns:auto_1fr] gap-8 lg:gap-12">
          {/* Left: Form card */}
          <div className="bg-[#EDEDED] rounded-2xl p-6 md:p-8 w-full max-w-[520px] md:max-w-[560px] lg:max-w-[520px] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
            <h3 className="text-center text-blue-900 text-xl md:text-2xl font-bold">Get in Touch with Us</h3>

            <form className="mt-9 space-y-7 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="bg-white rounded-xl w-full px-4 py-3 placeholder-slate-400 outline-none" placeholder="Input your name" />
                <input className="bg-white rounded-xl w-full px-4 py-3 placeholder-slate-400 outline-none" placeholder="Input your email" />
              </div>
              <input className="bg-white rounded-xl w-full px-4 py-3 placeholder-slate-400 outline-none" placeholder="Subject" />
              <textarea className="bg-white rounded-xl w-full px-4 py-3 placeholder-slate-400 outline-none h-40 resize-none" placeholder="Submit your message request" />

              <button type="button" className="inline-flex w-fit items-center justify-center rounded-full bg-blue-900 text-white px-6 py-3 hover:bg-blue-950 mt-2">Send Message</button>
            </form>
          </div>

          {/* Right: Details */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">
              <span className="text-blue-900">Contact </span>
              <span className="text-red-700">Details</span>
            </h3>
            <p className="mt-2 text-slate-600 text-sm md:text-base">For all questions regarding our services or to request a call back, please contact us</p>

            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
              <InfoCard icon={<LocationOnIcon sx={{ fontSize: 40, width: 40, height: 40 }} />} title="Address">
                <p>14 Goodall Street Walsall West Midlands WS1 1QL, United Kingdom</p>
                <p className="mt-3">Akwa 2, Unit 16 & 18<br/>Gie Rd, Table Bay, Cape Town, 7440</p>
              </InfoCard>
              <InfoCard icon={<PhoneIcon sx={{ fontSize: 40, width: 40, height: 40 }} />} title="Mobile">
                +447459381651
              </InfoCard>
              <InfoCard icon={<AccessTimeIcon sx={{ fontSize: 40, width: 40, height: 40 }} />} title="Availability">
                Daily 09 am - 06 pm
              </InfoCard>
              <InfoCard icon={<EmailIcon sx={{ fontSize: 40, width: 40, height: 40 }} />} title="Email">
    info@jordancareersandvisas.co.uk<br/>
                info@smiconcareersandvisas.co.uk
              </InfoCard>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-300 p-5 flex items-center justify-between bg-white transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
              <div className="text-slate-900 font-semibold">Social Media</div>
              <div className="flex items-center gap-3">
                <button aria-label="Facebook" className="h-10 w-10 rounded-full grid place-content-center border-2 border-blue-900 bg-blue-900 text-white hover:bg-transparent hover:text-blue-900"><FacebookIcon fontSize="small"/></button>
                <button aria-label="Instagram" className="h-10 w-10 rounded-full grid place-content-center border-2 border-blue-900 bg-blue-900 text-white hover:bg-transparent hover:text-blue-900"><InstagramIcon fontSize="small"/></button>
                <button aria-label="Twitter" className="h-10 w-10 rounded-full grid place-content-center border-2 border-blue-900 bg-blue-900 text-white hover:bg-transparent hover:text-blue-900"><TwitterIcon fontSize="small"/></button>
                <button aria-label="YouTube" className="h-10 w-10 rounded-full grid place-content-center border-2 border-blue-900 bg-blue-900 text-white hover:bg-transparent hover:text-blue-900"><YouTubeIcon fontSize="small"/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMainSection;
