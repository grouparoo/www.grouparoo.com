export const LineGraph = ({ className }: { className?: string }) => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50.4151 18.469C49.4786 16.6053 47.9001 15.5867 46.23 15.2317C44.6081 14.887 42.9124 15.1632 41.5463 15.8084C40.6975 16.2092 39.668 17.0318 38.9788 18.2411C38.2578 19.5062 37.9305 21.1652 38.5284 23.0754C38.7903 23.9123 39.2079 24.6255 39.7265 25.217C39.6829 25.2873 39.6373 25.3611 39.5897 25.4382C39.1798 26.1018 38.6244 27.0078 38.0429 27.9758C37.2479 29.2992 36.3522 30.8231 35.7315 31.9943C34.3798 31.7706 32.9943 31.9637 31.8053 32.4295L27.4821 27.2957C27.6505 26.9475 27.7845 26.5896 27.8859 26.2303C28.3094 24.7297 28.2031 23.0747 27.554 21.7827C26.6175 19.919 25.0391 18.9003 23.3689 18.5454C21.747 18.2007 20.0514 18.4769 18.6853 19.122C17.8364 19.5229 16.8069 20.3455 16.1177 21.5548C15.3968 22.8199 15.0695 24.4789 15.6673 26.3891C15.9902 27.4209 16.5499 28.2649 17.2435 28.9243C16.9392 29.3737 16.5466 30.0482 16.15 30.7547C15.6566 31.6335 15.0949 32.6753 14.5678 33.6687C14.054 34.6371 13.5695 35.5661 13.2077 36.2643C11.5955 35.93 9.91333 36.2069 8.55629 36.8477C7.70748 37.2486 6.67793 38.0712 5.98875 39.2805C5.26779 40.5456 4.94051 42.2046 5.53833 44.1148C6.16988 46.1328 7.70728 47.4324 9.38077 48.0377C11.0257 48.6326 12.9336 48.6097 14.5113 47.8575C16.2891 47.01 17.3222 45.4962 17.7569 43.956C18.1804 42.4554 18.0741 40.8004 17.425 39.5084C17.0745 38.8108 16.634 38.2316 16.1325 37.7613L20.1068 30.4978C21.6038 30.8911 23.2502 30.7945 24.6403 30.1318C24.8758 30.0195 25.0983 29.8955 25.3081 29.7613L29.2146 34.4002C29.0591 34.6055 28.9126 34.8255 28.7789 35.0601C28.058 36.3252 27.7307 37.9842 28.3285 39.8944C28.9601 41.9124 30.4975 43.212 32.1709 43.8172C33.8158 44.4122 35.7238 44.3892 37.3015 43.6371C39.0793 42.7896 40.1124 41.2758 40.5471 39.7356C40.9706 38.235 40.8643 36.58 40.2152 35.288C39.8131 34.4877 39.2926 33.8432 38.6973 33.3402C39.2372 32.3386 40.0333 30.9759 40.8298 29.6499C41.4024 28.6968 41.9505 27.8027 42.3558 27.1465C42.3823 27.1035 42.4083 27.0615 42.4336 27.0206C44.0641 27.5925 45.9436 27.5607 47.5013 26.8181C49.2791 25.9706 50.3123 24.4568 50.7469 22.9167C51.1705 21.416 51.0642 19.761 50.4151 18.469ZM45.5541 18.4118C44.7016 18.2306 43.729 18.373 42.9346 18.7481C42.6425 18.886 42.1368 19.2658 41.8034 19.8508C41.5018 20.3801 41.3191 21.1076 41.6311 22.1044C41.9093 22.9934 42.5886 23.6199 43.4766 23.941C44.3931 24.2725 45.3914 24.2224 46.1023 23.8835C46.9054 23.5006 47.3959 22.8207 47.6181 22.0336C47.8513 21.2071 47.7475 20.4013 47.5101 19.9287C47.0608 19.0345 46.3585 18.5827 45.5541 18.4118ZM35.3543 35.2307C34.5018 35.0495 33.5292 35.1919 32.7347 35.5671C32.4427 35.705 31.937 36.0847 31.6035 36.6698C31.3019 37.1991 31.1192 37.9266 31.4312 38.9234C31.7094 39.8124 32.3888 40.4388 33.2767 40.76C34.1933 41.0915 35.1915 41.0414 35.9024 40.7024C36.7055 40.3196 37.1961 39.6397 37.4182 38.8526C37.6515 38.0261 37.5477 37.2203 37.3102 36.7477C36.8609 35.8535 36.1586 35.4017 35.3543 35.2307ZM20.0735 22.0618C20.868 21.6866 21.8405 21.5442 22.6931 21.7254C23.4974 21.8964 24.1997 22.3482 24.649 23.2424C24.8865 23.715 24.9903 24.5208 24.757 25.3473C24.5349 26.1344 24.0443 26.8143 23.2412 27.1971C22.5303 27.5361 21.5321 27.5862 20.6155 27.2547C19.7276 26.9335 19.0482 26.3071 18.77 25.4181C18.458 24.4213 18.6407 23.6938 18.9423 23.1645C19.2757 22.5794 19.7815 22.1997 20.0735 22.0618ZM12.5641 39.4511C11.7116 39.2699 10.739 39.4123 9.94455 39.7875C9.65251 39.9254 9.14678 40.3051 8.81336 40.8902C8.51173 41.4195 8.32906 42.147 8.64102 43.1438C8.91924 44.0328 9.59859 44.6592 10.4865 44.9804C11.4031 45.3119 12.4013 45.2618 13.1122 44.9228C13.9154 44.54 14.4059 43.8601 14.628 43.073C14.8613 42.2465 14.7575 41.4407 14.52 40.9681C14.0708 40.0739 13.3684 39.6221 12.5641 39.4511Z"
      fill="#6090ED"
    />
  </svg>
);
