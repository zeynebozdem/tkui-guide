import React from 'react';
import Image from 'next/image';

const ComponentShowcase: React.FC = () => {
  return (
    <section className="py-10" id="components">
      <h2 className="text-3xl font-bold text-center mb-8">Components</h2>
      <div className="flex flex-col items-center">
        <Image
          src="/images/web2.png"
          width={900}
          height={0}
          alt="web2"
          style={{ height: 'auto' }}
          sizes="(max-width: 768px) 100vw, 384px"
          className="mb-8"
        />
        <Image
          src="/images/web3.png"
          width={900}
          height={0}
          alt="web3"
          sizes="(max-width: 768px) 100vw, 384px"
          style={{ height: 'auto' }}
        />
      </div>
    </section>
  );
};

export default ComponentShowcase; 