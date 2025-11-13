import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <section className="py-16 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={imageURL}
            alt={productName}
            className="w-80 md:w-96 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-5 text-gray-700">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            {productName}
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            {productDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href={tryDemo}
              className="text-blue-600 font-medium hover:underline"
            >
              Try demo →
            </a>
            <a
              href={learnMore}
              className="text-blue-600 font-medium hover:underline"
            >
              Learn more →
            </a>
          </div>

          <div className="flex items-center gap-4 mt-6">
              <a href={googlePlay}>
                <img
                  src="/media/images/googlePlayBadge.svg"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
              <a href={appStore}>
                <img
                  src="/media/images/appstoreBadge.svg"
                  alt="Download on the App Store"
                  className="h-10"
                />
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSection;
