'use client'; // Ensure this component is client-side rendered

import { useEffect, useState } from 'react';

export default function ThreeImageRow() {
  const [isClient, setIsClient] = useState(false);

  // Ensure the component only renders on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="pt-16 px-6">
      {/* Desktop: Three images in a row, Mobile: Flex column */}
      <div className="max-w-6xl mx-auto">
        {/* Desktop View - Hidden on mobile */}
        {isClient && (
          <div className="hidden md:grid grid-cols-3 gap-6 border-b border-gray-200 pb-6">
            <div className="relative overflow-hidden rounded-lg shadow-md border border-2 border-white/30 group animate-fadeIn">
              <img
                src="/images/image1.jpeg"
                alt="Hassle-Free PRO Services"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-md">
                Hassle-Free PRO Services
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border border-2 border-white/30 shadow-md group animate-fadeIn animation-delay-200">
              <img
                src="/images/image2.jpeg"
                alt="Unlock Your Business Potential with Ease"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-md">
                Unlock Your Business Potential with Ease
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border border-2 border-white/30 shadow-md group animate-fadeIn animation-delay-400">
              <img
                src="/images/image3.jpeg"
                alt="Start Your Business in Qatar"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-md">
                Start Your Business in Qatar
              </div>
            </div>
          </div>
        )}

        {/* Mobile View - Flex column with cool design, Hidden on desktop */}
        {isClient && (
          <div className="block md:hidden flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-xl shadow-lg group animate-fadeIn">
              <img
                src="/images/image1.jpeg"
                alt="Hassle-Free PRO Services"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-md">
                Hassle-Free PRO Services
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group animate-fadeIn animation-delay-200">
              <img
                src="/images/image2.jpeg"
                alt="Unlock Your Business Potential with Ease"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-md">
                Unlock Your Business Potential with Ease
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group animate-fadeIn animation-delay-400">
              <img
                src="/images/image3.jpeg"
                alt="Start Your Business in Qatar"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-md">
                Start Your Business in Qatar
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom animations for both desktop and mobile views */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
}