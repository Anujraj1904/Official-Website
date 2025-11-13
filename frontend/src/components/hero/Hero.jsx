function Hero({ title, subtitle, ctaText, ctaHref, heroImage, stats = [] }) {
  return (
    <section
      aria-label="Hero"
      className="relative bg-gradient-to-br from-black via-gray-900 to-yellow-700 text-white"
    >
      <div className="container mx-auto py-24">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="mt-4 max-w-xl">{subtitle}</p>
        <a href={ctaHref} className="btn-primary mt-6">
          {ctaText}
        </a>
        <HeroStats items={stats} />
      </div>

      <img
        src={heroImage}
        alt=""
        className="absolute right-0 top-0 hidden md:block"
      />
    </section>
  );
}

export default Hero;
