import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import data from '../data/data.json';
import { Job } from '../components/types';
import Bgimg from '../assets/bg-header-desktop.svg';

const Home: NextPage = () => {

  const jobs = data as Job[];
  const job = jobs;

  return (
    <>
      <Head>
        <title>Job listing project</title>
        <meta name="description" content="A frontend mentor challenge project" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className='bg-primary h-[100px] md:h-auto'>
        <Image src={Bgimg} alt='' className='w-full'/>
      </section>
      <section className='bg-secondary'>
        <div className='py-16 px-10 lg:max-w-6xl m-auto'>

          {job.map((item) => (
            <div className='relative shadow-xl bg-white rounded-lg mb-16 lg:mb-8 px-7 lg:px-10 py-5 flex flex-col lg:flex-row lg:justify-between' key={item.id}>
              <div className='flex flex-co lg:items-center'>
                <Image src={item.logo} width={80} height={80} alt='company logo' className='hidden md:block'/>
                <Image src={item.logo} width={80} height={80} alt='company logo' className='absolute -top-10 lg:top-10 block lg:hidden'/>
                <div className='mt-10 lg:mt-0 lg:ml-8'>
                  <div className='flex gap-5'>
                    <p className='text-primary font-bold text-lg'>{item?.company}</p>
                    <p className={`${ item?.new === true ? 'bg-primary ' : '' }font-semibold text-xs text-white rounded-full px-2 py-2 text-center`}>
                      {item?.new === true ? 'NEW!' : ''}
                    </p>

                    <p className={`${ item?.featured === true ? 'bg-textColor ' : '' }font-semibold text-xs text-white rounded-full px-2 py-2 text-center`}>
                      {item?.featured === true ? 'FEATURED' : ''}
                    </p>
                  </div>
                  <p className='text-textColor font-bold pt-4 pb-2 text-lg'>{item?.position}</p>
                  <div className='flex items-center gap-3 text-lg text-lightColor font-semibold mb-4 md:mb-0'>
                    <p>{item?.postedAt}</p>
                    <p>{item?.contract}</p>
                    <p className=''>{item?.location}</p>
                  </div>
                </div>
              </div>
              <div className='h-[1px] rounded-full w-full bg-borderColor overline lg:hidden'></div>

              <div className='flex flex-wrap gap-3 mt-4 lg:mt-0 text-primary text-lg font-semibold  items-center'>
                <p className='bg-secondary px-2 py-1'>{item?.role}</p>
                <p className='bg-secondary px-2 py-1'>{item?.level}</p>
                {item?.languages.map((lang) => (
                  <p key={lang} className='bg-secondary px-2 py-1'>{lang}</p>
                ))}

              </div>
            </div>
          ))}

        </div>
      </section>
    </>

  );
};

export default Home;
