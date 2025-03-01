import * as React from "react";

function Index(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={93} height={93} fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_230_4011)">
        <path
          d="M62.424 17.56c-5.404 0-9.805 4.395-9.805 9.804 0 2.513.953 4.806 2.517 6.54l-5.74 5.74a5.303 5.303 0 00-3.59-1.391 5.317 5.317 0 00-3.59 1.39l-5.107-5.106c1.926-1.795 3.14-4.34 3.14-7.18.01-5.402-4.381-9.796-9.795-9.796-5.413 0-9.796 4.394-9.796 9.803a9.766 9.766 0 003.716 7.67c.01.01.018.019.023.028.126.097.26.192.385.28.08.051.154.115.233.166.25.174.497.322.759.466l.115.055c.224.115.446.223.678.33.107.041.215.079.322.122.173.064.33.124.503.19.124.041.246.079.38.115.164.043.332.088.494.126.126.022.25.05.382.079.191.037.377.06.572.088.107.018.215.028.322.046.306.022.617.042.92.042.32 0 .631-.02.958-.052a.88.88 0 01.158-.02 7.54 7.54 0 00.795-.124l.134-.029c.284-.06.563-.13.837-.213.01 0 .028-.01.038-.01a9.148 9.148 0 002.312-1.07l5.403 5.403a5.332 5.332 0 00-.641 2.545c0 1.963 1.06 3.68 2.64 4.605l-9.598 25.32c-.385 1.019 0 2.116.93 2.66.944.555 2.106.35 2.818-.502 2.884-3.455 5.763-5.213 8.549-5.213 2.786 0 5.66 1.748 8.544 5.213a2.198 2.198 0 001.697.814c.387 0 .767-.097 1.126-.311.94-.545 1.32-1.642.93-2.66l-9.586-25.321a5.333 5.333 0 002.647-4.605c0-.92-.233-1.786-.641-2.545l5.924-5.929c.103.08.21.149.308.223.08.052.148.117.233.168.246.173.497.321.757.465.034.018.08.038.117.052.223.115.446.223.679.335.106.041.214.079.321.12.166.066.33.127.497.192.125.041.251.079.385.115.158.041.33.088.488.126.126.022.25.05.385.079.187.037.377.06.572.088.107.02.214.03.32.047.302.024.62.043.921.043.32 0 .632-.02.954-.051.055-.01.106-.02.162-.02a7.658 7.658 0 00.926-.153c.288-.061.563-.134.843-.215.008 0 .027-.008.037-.008a9.821 9.821 0 003.125-1.642c.022-.02.032-.045.061-.06a9.794 9.794 0 003.688-7.657c0-5.42-4.394-9.813-9.794-9.813l.003.004zm-2.52 8.494a2.508 2.508 0 115.017 0 2.506 2.506 0 01-2.506 2.506h-.01a2.506 2.506 0 01-2.501-2.506zm2.52 4.301c2.195 0 4.06 1.53 4.525 3.619-.033.029-.06.047-.097.07a6.663 6.663 0 01-.759.437c-.126.065-.26.134-.395.19a5.978 5.978 0 01-.66.257 5.144 5.144 0 01-.456.144c-.247.07-.507.134-.768.181-.116.014-.232.034-.349.052-.33.047-.66.07-1 .07h-.07c-.358 0-.707-.031-1.056-.078-.089-.01-.168-.03-.247-.04a7.703 7.703 0 01-2.037-.631l-.233-.107a7.188 7.188 0 01-.912-.534c-.01 0-.01-.01-.019-.01a4.627 4.627 0 014.53-3.618c-.007 0-.007 0 0 0l.003-.002zM34.13 34.482c-.125.065-.256.134-.39.191a5.987 5.987 0 01-.661.256 8.438 8.438 0 01-1.223.325c-.117.015-.233.034-.35.052-.33.047-.66.07-1 .07h-.073c-.354 0-.703-.031-1.052-.078-.088-.01-.173-.03-.25-.039a7.752 7.752 0 01-2.038-.632c-.08-.037-.149-.07-.233-.106a6.776 6.776 0 01-.907-.535c-.01 0-.01-.01-.02-.01a4.658 4.658 0 014.526-3.618h.01a4.631 4.631 0 014.521 3.618 7.025 7.025 0 01-.862.507l.002-.001zm-6.185-8.428a2.513 2.513 0 012.506-2.513 2.518 2.518 0 012.512 2.513 2.508 2.508 0 01-2.512 2.506h-.01a2.505 2.505 0 01-2.496-2.506zm-5.503 1.31c0-4.417 3.591-8.018 8.009-8.018 4.417 0 8.019 3.6 8.019 8.018a7.96 7.96 0 01-2.024 5.307 6.4 6.4 0 00-3.125-3.43 4.251 4.251 0 001.428-3.177 4.306 4.306 0 00-4.298-4.299 4.301 4.301 0 00-4.293 4.299c0 1.264.562 2.39 1.436 3.176a6.482 6.482 0 00-3.135 3.431 8.001 8.001 0 01-2.018-5.307h.001zM56.438 74.16c.102.27-.032.41-.157.493a.406.406 0 01-.544-.107c-3.242-3.887-6.581-5.86-9.921-5.86-3.34 0-6.684 1.972-9.926 5.86-.215.257-.451.158-.544.107-.132-.083-.266-.223-.158-.493l9.598-25.316c.331.06.68.097 1.038.097.353 0 .693-.037 1.033-.097l9.58 25.316zM45.806 47.164a3.565 3.565 0 01-3.563-3.563 3.563 3.563 0 113.563 3.563zm22.607-14.493a6.404 6.404 0 00-3.125-3.43 4.256 4.256 0 001.428-3.177 4.301 4.301 0 00-4.292-4.299 4.306 4.306 0 00-4.299 4.299c0 1.264.564 2.39 1.437 3.176a6.486 6.486 0 00-3.134 3.431 7.978 7.978 0 01-2.024-5.307 8.022 8.022 0 018.02-8.018c4.432 0 8.018 3.6 8.018 8.018a8.032 8.032 0 01-2.029 5.307z"
          fill="color(display-p3 .2588 .3922 .6667)"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_230_4011">
          <path
            fill="#fff"
            transform="translate(20.657 17.56)"
            d="M0 0h51.563v58.938H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

const VBookingHubIcon = React.memo(Index);
export { VBookingHubIcon };
