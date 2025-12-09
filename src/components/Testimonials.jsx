import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-[#F7EDE7]">
      <div className="max-w-6xl mx-auto text-center px-5">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Real feedback from our happy customers. We value every word and continue
          improving our services daily.
        </p>
      </div>

      <TestimonialCarousel />
    </section>
  );
};
export default TestimonialsSection;
