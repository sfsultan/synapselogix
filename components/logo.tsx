// Relative import to your image file
import LightLogo from '@/public/synapselogix-logo-light.svg';
import DarkLogo from '@/public/synapselogix-logo-dark.svg';
import Image from 'next/image'

const Logo = () => {
    return (
      <div className=''>
        <Image
            className="hidden dark:block"
            src={LightLogo}
            alt="SynapseLogix Logo"
            height={30}
            width={200}
        />
        <Image
            className="block dark:hidden"
            src={DarkLogo}
            alt="SynapseLogix Logo"
            height={30}
            width={200}
        />
    </div>
  );
};

export default Logo;