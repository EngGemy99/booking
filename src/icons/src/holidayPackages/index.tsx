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
      <g clipPath="url(#prefix__clip0_230_5308)">
        <g
          clipPath="url(#prefix__clip1_230_5308)"
          fill="color(display-p3 .2745 .4627 .8431)"
        >
          <path d="M30.887 29.509a.982.982 0 00.686-.277l1.883-1.836a.929.929 0 000-1.338.988.988 0 00-1.373 0L30.2 27.894a.929.929 0 000 1.338c.19.184.439.277.687.277zM25.309 27.256a.96.96 0 00.97-.946v-2.596a.96.96 0 00-.97-.946.96.96 0 00-.971.946v2.596a.96.96 0 00.97.946zM32.223 33.995a.96.96 0 00.97.947h2.664a.96.96 0 00.97-.947.96.96 0 00-.97-.946h-2.663a.959.959 0 00-.97.946zM30.2 38.761a.929.929 0 000 1.338l1.884 1.836c.189.184.438.277.686.277a.982.982 0 00.686-.277.93.93 0 000-1.338l-1.883-1.836a.988.988 0 00-1.373 0zM14.762 34.941h2.663a.96.96 0 00.97-.946.96.96 0 00-.97-.946h-2.663a.96.96 0 00-.971.946c0 .522.434.947.97.947zM25.31 38.747c2.689 0 4.875-2.132 4.875-4.75 0-2.62-2.187-4.752-4.874-4.752s-4.874 2.131-4.874 4.751c0 2.62 2.187 4.75 4.874 4.75zm0-7.61c1.618 0 2.933 1.282 2.933 2.86 0 1.576-1.315 2.858-2.932 2.858s-2.933-1.283-2.933-2.859 1.316-2.86 2.933-2.86z" />
          <path d="M66.164 59.433c0-2.192-1.758-3.986-4.002-4.086a3.865 3.865 0 00-.196-.006H41.18l10.051-16.97 10.114 5.692a.99.99 0 001.326-.346c1.819-3.071 2.302-6.649 1.36-10.073-.941-3.425-3.196-6.288-6.346-8.061a13.897 13.897 0 00-6.798-1.781c-4.857 0-9.38 2.543-11.807 6.64a.925.925 0 00-.097.717c.066.243.23.449.452.575l10.113 5.69L38.937 55.34H26.789c-2.279-2.22-6.882-6.704-6.93-6.747a4.265 4.265 0 00-5.799.128 4.008 4.008 0 000 5.787l8.967 8.74c.181.176.43.277.686.277h2.164l-3.037 2.96a.929.929 0 000 1.338c.19.185.438.277.686.277a.982.982 0 00.686-.277l4.41-4.298h10.684l17.704-.003 4.412 4.301a.98.98 0 00.687.277.98.98 0 00.686-.277.93.93 0 000-1.338l-3.04-2.963c1.91 0 2.301 0 2.397-.003 2.247-.097 4.008-1.892 4.008-4.086h.004zm-24.88-28.845c2.17-3.04 5.765-4.894 9.605-4.894 2.037 0 4.051.528 5.827 1.527 2.702 1.52 4.634 3.975 5.442 6.911.722 2.63.466 5.365-.716 7.798l-10.08-5.672-10.077-5.67zm20.802 31.04c-.447.002-24.588.004-27.604.004H24.119l-8.683-8.462-.06-.061c-.004-.005-.007-.01-.012-.014a2.153 2.153 0 01.071-3.036 2.29 2.29 0 013.102-.083c.244.238 4.062 3.955 7.166 6.98.181.176.429.276.686.276h35.577c.03 0 .06 0 .089.003h.015c1.207.052 2.154 1.017 2.154 2.196 0 1.178-.938 2.135-2.137 2.196l-.001.002zM19.047 29.232a.98.98 0 00.686.277.98.98 0 00.687-.277.929.929 0 000-1.338l-1.884-1.836a.988.988 0 00-1.372 0 .929.929 0 000 1.338l1.883 1.835zM19.047 38.761l-1.883 1.836a.929.929 0 000 1.338.98.98 0 00.686.277.98.98 0 00.686-.277l1.884-1.836a.929.929 0 000-1.338.988.988 0 00-1.373 0z" />
          <path d="M24.338 41.683v2.596a.96.96 0 00.97.946.96.96 0 00.971-.947v-2.595a.96.96 0 00-.97-.946.96.96 0 00-.971.946z" />
        </g>
      </g>
      <defs>
        <clipPath id="prefix__clip0_230_5308">
          <path
            fill="#fff"
            transform="translate(7.5 14.768)"
            d="M0 0h64v64H0z"
          />
        </clipPath>
        <clipPath id="prefix__clip1_230_5308">
          <path
            fill="#fff"
            transform="translate(12.833 22.768)"
            d="M0 0h53.333v45.333H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

const HolidayPackagesIcon = React.memo(Index);
export { HolidayPackagesIcon };
