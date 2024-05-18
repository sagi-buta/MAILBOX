import React from "react";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";

export default function NewMessageBtn() {
  return (
    <NavLink to={"NewMessage"}>
      <svg
        className={styles.NewMessage}
        onClick={""}
        height="51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="#00A389" />
        <path
          d="M63.752 31H61.9795L55.666 22.5186V31H54.0547V20.0137H55.8271L62.1406 28.5024V20.0137H63.752V31ZM72.6945 30.1284C71.7863 30.8071 70.7878 31.1465 69.6989 31.1465C68.9226 31.1465 68.2268 30.9756 67.6115 30.6338C66.9963 30.292 66.5104 29.8257 66.154 29.2349C65.7976 28.644 65.6193 27.9775 65.6193 27.2354C65.6193 26.5273 65.7829 25.895 66.1101 25.3384C66.4372 24.7769 66.884 24.335 67.4504 24.0127C68.0168 23.6904 68.6589 23.5293 69.3767 23.5293C70.1188 23.5293 70.7707 23.7051 71.3322 24.0566C71.8986 24.4082 72.3381 24.8989 72.6506 25.5288C72.968 26.1538 73.1267 26.8789 73.1267 27.7041V27.9385H67.2453C67.3332 28.3193 67.4992 28.6538 67.7434 28.9419C67.9875 29.2251 68.2902 29.4473 68.6516 29.6084C69.0129 29.7646 69.4206 29.8428 69.8747 29.8428C70.6853 29.8428 71.4299 29.5791 72.1086 29.0518L72.6945 30.1284ZM67.1794 26.8984H71.7277C71.6789 26.4883 71.552 26.1318 71.3469 25.8291C71.1418 25.5215 70.8757 25.2822 70.5485 25.1113C70.2263 24.9355 69.8625 24.8477 69.4572 24.8477C69.0471 24.8477 68.6784 24.9355 68.3513 25.1113C68.0241 25.2822 67.758 25.5215 67.5529 25.8291C67.3527 26.1367 67.2282 26.4932 67.1794 26.8984ZM83.0727 31H81.3441L79.85 25.7632L78.3559 31H76.6273L74.2836 23.6758H75.8729L77.477 29.2861L79.1688 23.6758H80.5312L82.223 29.2935L83.8344 23.6758H85.4237L83.0727 31ZM102.701 31H101.2V27.1694C101.2 26.4419 101.043 25.8779 100.731 25.4775C100.423 25.0771 99.9886 24.877 99.4271 24.877C98.8558 24.877 98.409 25.0796 98.0867 25.4849C97.7645 25.8901 97.6033 26.4517 97.6033 27.1694V31H96.1019V27.1694C96.1019 26.4419 95.9456 25.8779 95.6331 25.4775C95.3206 25.0771 94.8836 24.877 94.3221 24.877C93.7508 24.877 93.304 25.0796 92.9817 25.4849C92.6595 25.8901 92.4983 26.4517 92.4983 27.1694V31H90.9969V23.6758H92.2127L92.2713 24.9502C92.5154 24.4863 92.845 24.1348 93.2601 23.8955C93.68 23.6514 94.1731 23.5293 94.7396 23.5293C95.3401 23.5293 95.8553 23.6611 96.285 23.9248C96.7146 24.1885 97.0394 24.5669 97.2591 25.0601C97.5032 24.5571 97.8401 24.1763 98.2698 23.9175C98.7044 23.6587 99.2195 23.5293 99.8152 23.5293C100.723 23.5293 101.431 23.8174 101.939 24.3936C102.447 24.9697 102.701 25.7729 102.701 26.8032V31ZM111.497 30.1284C110.589 30.8071 109.59 31.1465 108.501 31.1465C107.725 31.1465 107.029 30.9756 106.414 30.6338C105.799 30.292 105.313 29.8257 104.957 29.2349C104.6 28.644 104.422 27.9775 104.422 27.2354C104.422 26.5273 104.585 25.895 104.913 25.3384C105.24 24.7769 105.687 24.335 106.253 24.0127C106.819 23.6904 107.461 23.5293 108.179 23.5293C108.921 23.5293 109.573 23.7051 110.135 24.0566C110.701 24.4082 111.141 24.8989 111.453 25.5288C111.771 26.1538 111.929 26.8789 111.929 27.7041V27.9385H106.048C106.136 28.3193 106.302 28.6538 106.546 28.9419C106.79 29.2251 107.093 29.4473 107.454 29.6084C107.815 29.7646 108.223 29.8428 108.677 29.8428C109.488 29.8428 110.232 29.5791 110.911 29.0518L111.497 30.1284ZM105.982 26.8984H110.53C110.481 26.4883 110.354 26.1318 110.149 25.8291C109.944 25.5215 109.678 25.2822 109.351 25.1113C109.029 24.9355 108.665 24.8477 108.26 24.8477C107.85 24.8477 107.481 24.9355 107.154 25.1113C106.827 25.2822 106.561 25.5215 106.355 25.8291C106.155 26.1367 106.031 26.4932 105.982 26.8984ZM113.291 30.3628L113.657 29.0151C113.823 29.1812 114.021 29.3276 114.251 29.4546C114.485 29.5815 114.732 29.6816 114.99 29.7549C115.254 29.8232 115.513 29.8574 115.767 29.8574C116.167 29.8574 116.489 29.772 116.734 29.6011C116.978 29.4302 117.1 29.2031 117.1 28.9199C117.1 28.71 117.031 28.5366 116.895 28.3999C116.763 28.2583 116.585 28.1362 116.36 28.0337C116.14 27.9312 115.904 27.8311 115.65 27.7334C115.322 27.6113 114.995 27.4697 114.668 27.3086C114.346 27.1475 114.075 26.9326 113.855 26.6641C113.635 26.3955 113.526 26.0415 113.526 25.6021C113.526 25.1821 113.633 24.8184 113.848 24.5107C114.063 24.1982 114.363 23.9565 114.749 23.7856C115.134 23.6147 115.579 23.5293 116.082 23.5293C116.863 23.5293 117.637 23.7246 118.404 24.1152L117.964 25.397C117.808 25.2847 117.622 25.1846 117.407 25.0967C117.193 25.0088 116.973 24.9404 116.748 24.8916C116.524 24.8379 116.316 24.811 116.126 24.811C115.808 24.811 115.552 24.8818 115.357 25.0234C115.166 25.165 115.071 25.3555 115.071 25.5947C115.071 25.7412 115.117 25.8755 115.21 25.9976C115.303 26.1147 115.449 26.2319 115.65 26.3491C115.855 26.4614 116.131 26.5884 116.477 26.73C116.809 26.8618 117.141 27.0132 117.473 27.1841C117.805 27.355 118.081 27.5771 118.301 27.8506C118.526 28.124 118.638 28.4829 118.638 28.9272C118.638 29.3667 118.521 29.7549 118.286 30.0918C118.052 30.4238 117.725 30.6826 117.305 30.8682C116.89 31.0537 116.406 31.1465 115.855 31.1465C114.942 31.1465 114.087 30.8853 113.291 30.3628ZM120.022 30.3628L120.388 29.0151C120.554 29.1812 120.752 29.3276 120.981 29.4546C121.216 29.5815 121.462 29.6816 121.721 29.7549C121.985 29.8232 122.244 29.8574 122.497 29.8574C122.898 29.8574 123.22 29.772 123.464 29.6011C123.708 29.4302 123.83 29.2031 123.83 28.9199C123.83 28.71 123.762 28.5366 123.625 28.3999C123.494 28.2583 123.315 28.1362 123.091 28.0337C122.871 27.9312 122.634 27.8311 122.38 27.7334C122.053 27.6113 121.726 27.4697 121.399 27.3086C121.077 27.1475 120.806 26.9326 120.586 26.6641C120.366 26.3955 120.256 26.0415 120.256 25.6021C120.256 25.1821 120.364 24.8184 120.579 24.5107C120.793 24.1982 121.094 23.9565 121.479 23.7856C121.865 23.6147 122.309 23.5293 122.812 23.5293C123.594 23.5293 124.368 23.7246 125.134 24.1152L124.695 25.397C124.538 25.2847 124.353 25.1846 124.138 25.0967C123.923 25.0088 123.704 24.9404 123.479 24.8916C123.254 24.8379 123.047 24.811 122.856 24.811C122.539 24.811 122.283 24.8818 122.087 25.0234C121.897 25.165 121.802 25.3555 121.802 25.5947C121.802 25.7412 121.848 25.8755 121.941 25.9976C122.034 26.1147 122.18 26.2319 122.38 26.3491C122.585 26.4614 122.861 26.5884 123.208 26.73C123.54 26.8618 123.872 27.0132 124.204 27.1841C124.536 27.355 124.812 27.5771 125.032 27.8506C125.256 28.124 125.369 28.4829 125.369 28.9272C125.369 29.3667 125.251 29.7549 125.017 30.0918C124.783 30.4238 124.455 30.6826 124.036 30.8682C123.621 31.0537 123.137 31.1465 122.585 31.1465C121.672 31.1465 120.818 30.8853 120.022 30.3628ZM133.381 31H132.085L131.997 30.0625C131.728 30.4043 131.389 30.6704 130.979 30.8608C130.568 31.0513 130.114 31.1465 129.616 31.1465C129.094 31.1465 128.628 31.0439 128.217 30.8389C127.807 30.6338 127.485 30.353 127.251 29.9966C127.016 29.6401 126.899 29.2349 126.899 28.7808C126.899 28.3022 127.026 27.8823 127.28 27.521C127.534 27.1548 127.88 26.8691 128.32 26.6641C128.759 26.4541 129.26 26.3491 129.821 26.3491C130.173 26.3491 130.529 26.3906 130.891 26.4736C131.257 26.5566 131.587 26.6738 131.879 26.8252V26.5542C131.879 26.1978 131.787 25.8926 131.601 25.6387C131.421 25.3799 131.171 25.1821 130.854 25.0454C130.542 24.9087 130.195 24.8403 129.814 24.8403C129.477 24.8403 129.133 24.8989 128.781 25.0161C128.435 25.1333 128.108 25.314 127.8 25.5581L127.346 24.335C127.79 24.0713 128.252 23.8711 128.73 23.7344C129.213 23.5977 129.687 23.5293 130.151 23.5293C130.815 23.5293 131.386 23.6611 131.865 23.9248C132.348 24.1885 132.722 24.5645 132.985 25.0527C133.249 25.5361 133.381 26.1074 133.381 26.7666V31ZM129.909 29.8721C130.256 29.8721 130.576 29.8013 130.869 29.6597C131.162 29.5132 131.399 29.3081 131.579 29.0444C131.765 28.7759 131.865 28.4634 131.879 28.1069V28.0044C131.63 27.8188 131.35 27.6748 131.037 27.5723C130.73 27.4648 130.415 27.4111 130.092 27.4111C129.599 27.4111 129.189 27.5283 128.862 27.7627C128.535 27.9971 128.371 28.2974 128.371 28.6636C128.371 28.8931 128.437 29.1006 128.569 29.2861C128.706 29.4668 128.889 29.6108 129.118 29.7183C129.353 29.8208 129.616 29.8721 129.909 29.8721ZM138.727 31.0293C138.039 31.0293 137.421 30.8657 136.874 30.5386C136.327 30.2114 135.895 29.7646 135.578 29.1982C135.265 28.6318 135.109 27.9922 135.109 27.2793C135.109 26.5615 135.265 25.9219 135.578 25.3604C135.895 24.7939 136.327 24.3472 136.874 24.02C137.421 23.6929 138.041 23.5293 138.735 23.5293C139.282 23.5293 139.784 23.6343 140.243 23.8442C140.707 24.0542 141.1 24.3423 141.423 24.7085L141.496 23.6758H142.822V30.8022C142.822 31.6226 142.653 32.3306 142.316 32.9263C141.984 33.5269 141.513 33.9907 140.903 34.3179C140.292 34.645 139.57 34.8086 138.735 34.8086C137.558 34.8086 136.52 34.4253 135.622 33.6587L136.259 32.4429C136.918 33.1216 137.714 33.4609 138.647 33.4609C139.189 33.4609 139.658 33.3486 140.053 33.124C140.453 32.8994 140.763 32.5845 140.983 32.1792C141.208 31.7788 141.32 31.3052 141.32 30.7583V29.96C140.998 30.292 140.615 30.5532 140.17 30.7437C139.726 30.9341 139.245 31.0293 138.727 31.0293ZM138.976 29.6963C139.406 29.6963 139.797 29.5986 140.148 29.4033C140.505 29.208 140.788 28.9419 140.998 28.605C141.213 28.2632 141.32 27.875 141.32 27.4404V27.1108C141.32 26.6763 141.213 26.2905 140.998 25.9536C140.788 25.6167 140.505 25.3506 140.148 25.1553C139.797 24.96 139.406 24.8623 138.976 24.8623C138.527 24.8623 138.127 24.9697 137.775 25.1846C137.424 25.3945 137.145 25.6826 136.94 26.0488C136.735 26.4102 136.633 26.8203 136.633 27.2793C136.633 27.7383 136.735 28.1509 136.94 28.5171C137.145 28.8833 137.424 29.1714 137.775 29.3813C138.127 29.5913 138.527 29.6963 138.976 29.6963ZM151.698 30.1284C150.79 30.8071 149.792 31.1465 148.703 31.1465C147.926 31.1465 147.23 30.9756 146.615 30.6338C146 30.292 145.514 29.8257 145.158 29.2349C144.801 28.644 144.623 27.9775 144.623 27.2354C144.623 26.5273 144.787 25.895 145.114 25.3384C145.441 24.7769 145.888 24.335 146.454 24.0127C147.021 23.6904 147.663 23.5293 148.38 23.5293C149.123 23.5293 149.774 23.7051 150.336 24.0566C150.902 24.4082 151.342 24.8989 151.654 25.5288C151.972 26.1538 152.13 26.8789 152.13 27.7041V27.9385H146.249C146.337 28.3193 146.503 28.6538 146.747 28.9419C146.991 29.2251 147.294 29.4473 147.655 29.6084C148.017 29.7646 148.424 29.8428 148.878 29.8428C149.689 29.8428 150.434 29.5791 151.112 29.0518L151.698 30.1284ZM146.183 26.8984H150.731C150.683 26.4883 150.556 26.1318 150.351 25.8291C150.146 25.5215 149.879 25.2822 149.552 25.1113C149.23 24.9355 148.866 24.8477 148.461 24.8477C148.051 24.8477 147.682 24.9355 147.355 25.1113C147.028 25.2822 146.762 25.5215 146.557 25.8291C146.356 26.1367 146.232 26.4932 146.183 26.8984Z"
          fill="white"
        />
        <path
          d="M33 20.535V30C33 30.7652 32.7077 31.5015 32.1827 32.0583C31.6578 32.615 30.9399 32.9501 30.176 32.995L30 33H16C15.2348 33 14.4985 32.7077 13.9417 32.1827C13.385 31.6578 13.0499 30.9399 13.005 30.176L13 30V20.535L22.445 26.832L22.561 26.898C22.6977 26.9648 22.8478 26.9995 23 26.9995C23.1522 26.9995 23.3023 26.9648 23.439 26.898L23.555 26.832L33 20.535Z"
          fill="white"
        />
        <path
          d="M29.9999 17C31.0799 17 32.0269 17.57 32.5549 18.427L22.9999 24.797L13.4449 18.427C13.6957 18.0198 14.0402 17.6784 14.4497 17.4314C14.8591 17.1844 15.3218 17.0389 15.7989 17.007L15.9999 17H29.9999Z"
          fill="white"
        />
      </svg>
    </NavLink>
  );
}