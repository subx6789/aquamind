import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Button from "./Button";

export default function Hero({ func }) {
  const [fadeIn, setFadeIn] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setFadeIn(true);
    }
  }, [inView]);

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center">
        <div
          className={`md:w-1/2 mb-8 md:mb-0 transition-transform duration-1000 ${
            fadeIn ? "translate-x-0" : "-translate-x-64"
          }`}
          ref={ref}
        >
          <div className="rounded-full overflow-hidden w-full aspect-square">
            <img
              src="https://images.unsplash.com/photo-1503536882745-fa1ce53c4928?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTUyODh8MHwxfHNlYXJjaHwyMHx8Y2xlYW4lMjB3YXRlcnxlbnwwfDB8fHwxNzIwMzY2NDI5fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Clean water glass"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className={`md:w-1/2 md:pl-12 transition-transform duration-1000 ${
            fadeIn ? "translate-x-0" : "translate-x-96"
          }`}
          ref={ref}>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Empowering Communities with Clean Water
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Join us in our mission to provide clean and safe water solutions to
            rural areas. Share your water challenges and be part of the change.
          </p>
          <Button func={func} />
        </div>
      </div>
    </div>
  );
}
