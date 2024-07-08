import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Banner() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <div className="relative bg-teal-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className={`text-center mb-8 transition-transform duration-1000 ${animate ? "translate-y-0" : "translate-y-56"}`} ref={ref}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empowering communities with sustainable water solutions!
          </h2>
          <p className="text-xl">Join us in changing lives!</p>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTUyODh8MHwxfHNlYXJjaHwyMHx8Y2xlYW4lMjB3YXRlciUyMGFjY2Vzc3xlbnwwfDB8fHwxNzIwMzY2NDI5fDA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Clean water access"
          className="w-full h-full object-cover opacity-70"
        />
      </div>
    </div>
  );
}
