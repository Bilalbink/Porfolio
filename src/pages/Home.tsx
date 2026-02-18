import { Link } from 'react-router-dom';
import { homeContent } from '../data/content';

export default function Home() {
  const quickLinks = [
    { to: '/journey', title: 'My Journey', icon: '🚀', color: 'from-primary to-secondary' },
    { to: '/projects', title: 'Projects', icon: '💻', color: 'from-secondary to-primary' },
    { to: '/arts-and-craft', title: 'Arts & Craft', icon: '🎨', color: 'from-primary via-secondary to-accent' },
    { to: '/music', title: 'Music', icon: '🎵', color: 'from-secondary to-accent' },
  ];

  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content text-center flex-col">
          {/* Avatar */}
          <div className="avatar placeholder mb-6">
            <div className="bg-gradient-to-br from-primary via-secondary to-accent text-neutral-content rounded-full w-32 sm:w-40 shadow-2xl shadow-primary/30 animate-[float_3s_ease-in-out_infinite]">
              <span className="text-6xl sm:text-7xl">👤</span>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {homeContent.name}
          </h1>

          {/* Tagline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            {homeContent.tagline}
          </h2>

          {/* Intro paragraph */}
          <p className="text-base sm:text-lg lg:text-xl opacity-80 max-w-2xl leading-relaxed">
            {homeContent.intro}
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Link
              to="/projects"
              className="btn btn-lg bg-gradient-to-r from-primary to-secondary text-primary-content border-0 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              View My Work
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="w-full max-w-5xl mx-auto mt-16 px-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8">
          Explore My Portfolio
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="card bg-base-200 border border-secondary/30 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>

              {/* Content */}
              <div className="card-body items-center text-center relative z-10">
                <span className="text-5xl">{link.icon}</span>
                <h4 className="card-title text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-primary group-hover:to-secondary transition-all">
                  {link.title}
                </h4>
              </div>

              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary transition-colors duration-300 pointer-events-none"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
