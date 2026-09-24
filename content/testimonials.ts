export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  service: string;
};

// Intentionally empty. Add real customer quotes here once jobs are
// completed and the customer has agreed to be quoted. Pages hide their
// review sections while this list is empty.
export const testimonials: Testimonial[] = [];
