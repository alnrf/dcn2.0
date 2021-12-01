import React from 'react';
export const Bazar = ({
  color = 'currentColor',
  width = '22px',
  height = '20px',
  ...props
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      version="1.1" 
      x="0px" 
      y="0px" 
      width={width}
      height={height}
      viewBox="0 0 95 90" 
      {...props}
      // xmlns:xlink="http://www.w3.org/1999/xlink" 
      // style="enable-background:new 0 0 100 100;" 
      // xml:space="preserve"
    >
        <path d="M87.1113281,10.8369141C87.0322266,10.3540039,86.6142578,10,86.125,10h-72  c-0.484375,0-0.8984375,0.3466797-0.984375,0.8232422l-3.125,17.4023438C10.0048828,28.2836914,10,28.3432617,10,28.4023438  c0,2.8828735,2.1113281,5.2789917,4.875,5.75354v20.0443115h-3.2871094c-0.5527344,0-1,0.4477539-1,1V89  c0,0.5522461,0.4472656,1,1,1h77.1162109c0.5527344,0,1-0.4477539,1-1V55.2001953c0-0.5522461-0.4472656-1-1-1h-3.2871094  V34.1000366C88.0360718,33.512146,90,31.1829224,90,28.4023438c0-0.0546875-0.0048828-0.1088867-0.0136719-0.1630859  L87.1113281,10.8369141z M87.7339478,26.875H80.25V12h5.0263672L87.7339478,26.875z M70.5,26.875V12h7.75v14.875H70.5z M68.5,26.875  h-7.75V12h7.75V26.875z M58.75,26.875h-7.7373047V12H58.75V26.875z M49.0126953,26.875H41.25V12h7.7626953V26.875z M39.25,26.875  H31.5V12h7.75V26.875z M29.5,26.875h-7.7734375V12H29.5V26.875z M29.4518433,28.875  c-0.237915,1.8953247-1.8532715,3.3720703-3.8268433,3.3720703S22.0360718,30.7703247,21.7981567,28.875H29.4518433z   M39.2018433,28.875c-0.237915,1.8953247-1.8532715,3.3720703-3.8268433,3.3720703S31.7860718,30.7703247,31.5481567,28.875  H39.2018433z M48.9518433,28.875c-0.237915,1.8953247-1.8532715,3.3720703-3.8268433,3.3720703  S41.5360718,30.7703247,41.2981567,28.875H48.9518433z M58.7018433,28.875  c-0.237915,1.8953247-1.8532715,3.3720703-3.8268433,3.3720703S51.2860718,30.7703247,51.0481567,28.875H58.7018433z   M68.4518433,28.875c-0.237915,1.8953247-1.8532715,3.3720703-3.8268433,3.3720703S61.0360718,30.7703247,60.7981567,28.875  H68.4518433z M78.2018433,28.875c-0.237915,1.8953247-1.8532715,3.3720703-3.8268433,3.3720703  S70.7860718,30.7703247,70.5481567,28.875H78.2018433z M14.9619141,12h4.7646484v14.875h-7.4362183L14.9619141,12z   M12.0485229,28.875h7.6533203c-0.237915,1.8953247-1.8532715,3.3720703-3.8268433,3.3720703  C13.9015503,32.2470703,12.286377,30.7703247,12.0485229,28.875z M19.1621094,88h-6.5742188V56.2001953h6.5742188V88z   M21.1621094,88V71.75h57.9677734V88H21.1621094z M44.0634766,62.0869141c-0.4941406,3.9755859-3.8935547,7.0625-8.0009766,7.0625  s-7.5068359-3.0869141-8.0009766-7.0625H44.0634766z M30.1439819,60.0869141c0.1950073-3.098999,2.7706909-5.5625,5.9185181-5.5625  s5.7235107,2.463501,5.9185181,5.5625H30.1439819z M71.9492188,62.0869141c-0.4941406,3.9755859-3.8935547,7.0625-8.0009766,7.0625  s-7.5068359-3.0869141-8.0009766-7.0625H71.9492188z M58.0297241,60.0869141c0.1950073-3.098999,2.7706909-5.5625,5.9185181-5.5625  s5.7235107,2.463501,5.9185181,5.5625H58.0297241z M87.7041016,88h-6.5742188V56.2001953h6.5742188V88z M80.1298828,54.2001953  c-0.5527344,0-1,0.4477539-1,1V69.75H69.0419312c2.9678345-1.7518921,4.968811-4.9744263,4.968811-8.6630859  c0-0.5522461-0.4472656-1-1-1h-1.1439819c-0.1977539-4.2022705-3.6681519-7.5625-7.9185181-7.5625  s-7.7207642,3.3602295-7.9185181,7.5625h-1.1439819c-0.5527344,0-1,0.4477539-1,1  c0,3.6886597,2.0009766,6.9111938,4.968811,8.6630859H41.156189c2.9678345-1.7518921,4.968811-4.9744263,4.968811-8.6630859  c0-0.5522461-0.4472656-1-1-1h-1.1439819c-0.1977539-4.2022705-3.6681519-7.5625-7.9185181-7.5625  s-7.7207642,3.3602295-7.9185181,7.5625H27c-0.5527344,0-1,0.4477539-1,1c0,3.6886597,2.0009766,6.9111938,4.968811,8.6630859  h-9.8067017V55.2001953c0-0.5522461-0.4472656-1-1-1H16.875V34.1558838c1.6082764-0.2761841,2.9966431-1.1992188,3.875-2.4958496  c1.0562134,1.5592041,2.847168,2.5870361,4.875,2.5870361s3.8187866-1.027832,4.875-2.5870361  c1.0562134,1.5592041,2.847168,2.5870361,4.875,2.5870361s3.8187866-1.027832,4.875-2.5870361  c1.0562134,1.5592041,2.847168,2.5870361,4.875,2.5870361s3.8187866-1.027832,4.875-2.5870361  c1.0562134,1.5592041,2.847168,2.5870361,4.875,2.5870361s3.8187866-1.027832,4.875-2.5870361  c1.0562134,1.5592041,2.847168,2.5870361,4.875,2.5870361s3.8187866-1.027832,4.875-2.5870361  c1.0562134,1.5592041,2.847168,2.5870361,4.875,2.5870361s3.8187866-1.027832,4.875-2.5870361  c0.9311523,1.3746338,2.4348145,2.3319702,4.1669922,2.5403442v19.9998169H80.1298828z M84.125,32.2470703  c-1.9735718,0-3.5889282-1.4767456-3.8268433-3.3720703h7.6530151C87.7128296,30.7700195,86.0981445,32.2470703,84.125,32.2470703z"/>
      </svg>
  );
};
