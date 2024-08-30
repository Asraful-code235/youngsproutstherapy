import Link from 'next/link';

export default function TopBar() {
  return (
    <div className='text-black text-center mx-auto py-1.5 font-semibold bg-brand-color-three'>
      Ready to schedule an appointment?{' '}
      <Link
        className='font-bold'
        href='https://youngsproutstherapy.janeapp.com/'
      >
        Click Here
      </Link>
    </div>
  );
}
