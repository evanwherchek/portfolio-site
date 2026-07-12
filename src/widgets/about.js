import Signature from './custom/signature';
import Image from 'next/image';

function About() {
  return (
    <div className="w-full flex bg-soft-white items-center justify-center py-20 px-6 lg:py-32 lg:px-0">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <Image
          width={320}
          height={320}
          className="w-40 h-40 lg:w-80 lg:h-80"
          src="/images/headshot.png"
          alt="Evan Herchek"
        />
        <div className="lg:w-12 lg:ml-8" />
        <div className="max-w-md lg:w-96">
          <h2 className="font-poly text-black font-thin text-3xl text-left mt-6 lg:mt-0">
            Hello!
          </h2>
          <p className="font-poly text-black font-thin text-lg mt-6 text-left">
            My name is Evan and I am an early career technologist. Currently, I am based in St. Louis at National
            Information Solutions Cooperative building software to power
            America&#39;s rural utility and telecom industries.
          </p>
          <p className="font-poly text-black font-thin text-lg mt-6 text-left">
            I have a passion for architecting and creating large projects that
            improve the lives of my users. I am always exploring new
            technologies and ideas to figure out how I can adopt them to create
            something incredible. And the best part is that I&#39;m just getting
            started. Everyday, I wake up ready to continue building. The future
            is exciting!
          </p>
          <div className="w-1/3 mt-6">
            <Signature />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
