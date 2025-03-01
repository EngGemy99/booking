import * as React from "react";

function Index(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={79} height={79} fill="none" {...props}>
      <rect
        x={0.5}
        y={0.768}
        width={78}
        height={78}
        rx={39}
        fill="color(display-p3 .9373 .9765 .9804)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.905 59.724h-8.553a5.316 5.316 0 01-5.313-5.313V38.48h37.163c.98 0 1.774-.794 1.774-1.774v-3.539c0-4.883-3.969-8.852-8.852-8.852H49.35v-1.774a1.773 1.773 0 10-3.548 0v1.774H31.646v-1.774a1.773 1.773 0 10-3.548 0v1.774h-1.774c-4.856.01-8.824 3.978-8.824 8.862V54.41c0 4.883 3.968 8.852 8.852 8.852h8.553a1.773 1.773 0 100-3.549v.01zM21.039 33.178a5.316 5.316 0 015.313-5.313h1.774v1.774a1.773 1.773 0 103.548 0v-1.774H45.83v1.774a1.773 1.773 0 103.548 0v-1.774h1.774a5.316 5.316 0 015.313 5.313v1.774H21.039v-1.774zm5.313 8.842a1.773 1.773 0 10-.002 3.547 1.773 1.773 0 00.002-3.547zm8.852 1.774a1.774 1.774 0 11-3.548 0 1.774 1.774 0 013.548 0zm5.116 1.774a1.774 1.774 0 100-3.548 1.774 1.774 0 000 3.548zm-15.742 5.313a1.773 1.773 0 113.548 0 1.773 1.773 0 11-3.548 0zm8.852 1.765a1.774 1.774 0 100-3.548 1.774 1.774 0 000 3.548zm26.536-2.204c.635 0 1.214.364 1.485.943h.019c.27.58.177 1.261-.234 1.747l-16.05 19.057a1.652 1.652 0 01-1.252.58c-.29 0-.588-.085-.85-.244a1.624 1.624 0 01-.653-2.026l4.958-11.774h-3.455c-.57 0-1.092-.29-1.391-.775a1.63 1.63 0 01-.075-1.588l7.526-15.042c.28-.56.85-.906 1.466-.906h8.02a1.631 1.631 0 011.373 2.512l-4.78 7.516h3.893zm-8.618 7.283l-1.737 4.118 6.844-8.133h-3.361a1.631 1.631 0 01-1.373-2.511l4.781-7.517H52.46l-5.892 11.774h3.278c.55 0 1.064.271 1.363.729.299.457.355 1.036.14 1.54z"
        fill="color(display-p3 .2745 .4627 .8431)"
      />
    </svg>
  );
}

const BookingManagementIcon = React.memo(Index);
export { BookingManagementIcon };
