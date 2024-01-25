'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit,reset } = useForm<FormData>();

   function onSubmit(data: FormData) {
    sendEmail(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='w-full mb-1 px-2 md:px-0'>
        <label
          htmlFor='name'
          className='mb-1 block text-base font-medium text-black'
        >
          Full Name
        </label>
        <input
          type='text'
          id='name'
          placeholder='Full Name'
          className='w-full rounded-md border border-zinc-50/30 bg-black py-2 px-4 text-base font-medium text-white outline-none focus:border-gray-300 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-2 px-2'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium text-black'
        >
          Email Address
        </label>
        <input
          type='email'
          id='email'
          placeholder='Enter your email'
          className='w-full rounded-md border border-zinc-50/30 bg-black py-2 px-4 text-base font-medium text-white outline-none focus:border-gray-300 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-2 px-2'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium text-black'
        >
          Message
        </label>
        <textarea
          rows={4} 
          id='message'
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-zinc-50/30  bg-black py-2 px-4 text-base font-medium text-white outline-none focus:border-gray-300 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div className='ml-[2.5rem]'>
      <button className="shadow-[inset_0_0_0_2px_#616467] px-9 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
  Send Message
</button>
      </div>
    </form>
  );
};

export default Contact;