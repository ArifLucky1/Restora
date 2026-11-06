import React from "react";
import Animated from "../components/Animated";
import { testimonials } from "../data/data";
import { StarIcon } from "lucide-react";

const Testimonial = () => {
  return (
    <section id="testimonials" className="px-auto mt-44">
      <div className="text-center mb-14">
        <Animated delay={0.2}>
          <p className="text-orange-500 font-medium uppercase mb-4">
            LOVED BY FOOD LOVERS
          </p>
        </Animated>

        <Animated delay={0.2}>
          <h2 className="text-4xl md:text-5xl max-w-lg mx-auto text-balance">
            What Our Guests Say
          </h2>
        </Animated>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {testimonials.map((item, index) => (
          <Animated
            key={index}
            y={80}
            delay={index * 0.1}
            className="border border-slate-200 hover:bg-scale-50/50 rounded-2xl p-6 flex flex-col justify-between text-left"
          >
            <div>
              <div>
                {[...Array(item.rating).map(() => (
                    <StarIcon />
                ))]}
              </div>
              <p className="text-zinc-600 leading-relaxed mb-6">"{item.review}"</p>
            </div>
          </Animated>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
