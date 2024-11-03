import { FunctionComponent } from "react";
import { Xmark } from "iconoir-react";

interface Props {
  isShowing: boolean;
  onDismiss: () => void;
}

const DisclaimerModal: FunctionComponent<Props> = ({ isShowing, onDismiss }) => {

  return (
    <div className={`
      absolute top-0 left-0 w-full h-full
      flex items-center justify-center p-8 bg-black50
      transition-opacity duration-300 ${ isShowing ? 'opacity-100' : 'opacity-0 pointer-events-none' }
    `}>
      <div className='flex flex-col max-w-[768px] max-h-[calc(100dvh-64px)] p-8 bg-background gap-4'>
        <div className='flex flex-row justify-between'>
          <span className='font-bold'>Disclaimer</span>
          <Xmark color='var(--foreground)' width='24px' height='24px' className='cursor-pointer' onClick={() => onDismiss()} />
        </div>
        <span className='text-justify overflow-y-scroll'>
          {`The information contained in this website is for general information purposes only. The information is provided by Rocket Index and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website. Through this website you are able to link to other websites which are not under the control of Rocket Index. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. Every effort is made to keep the website up and running smoothly. However, Rocket Index takes no responsibility for, and will not be liable for, the website being temporarily unavailable for any reason.`}
        </span>
      </div>
    </div>
  );
}

export default DisclaimerModal;