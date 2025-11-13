import React from "react";

const Hero = () => {
  return (
    <section className="bg-white text-gray-700 py-20 px-6 border-b">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-medium text-gray-800 leading-snug">
            We pioneered the discount broking model in India. <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>

        <hr className="border-gray-200 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-base leading-relaxed text-gray-600">
          <div className="space-y-5">
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company <span className="font-semibold text-gray-800">Zerodha</span>,
              a combination of <em>Zero</em> and <em>"Rodha"</em>, the Sanskrit word for barrier.
            </p>

            <p>
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>

            <p>
              Over <span className="font-semibold">1.6+ crore clients</span> place
              billions of orders every year through our powerful ecosystem of
              investment platforms, contributing over{" "}
              <span className="font-semibold">15% of all Indian retail trading volumes</span>.
            </p>
          </div>

          <div className="space-y-5">
            <p>
              In addition, we run a number of popular open online educational and
              community initiatives to empower retail traders and investors.
            </p>

            <p>
              <span className="font-semibold text-gray-800">Rainmatter</span>, our
              fintech fund and incubator, has invested in several fintech startups
              with the goal of growing the Indian capital markets.
            </p>

            <p>
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog, see what the media is saying about
              us, or learn more about our business and product philosophies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
