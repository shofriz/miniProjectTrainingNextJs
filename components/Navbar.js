import Link from 'next/link';

function NavBar()  {
  return (
    <nav className='flex items-center flex-wrap bg-red-700 p-3 flex-row'>
      
      <ul className='flex' >
        <li>
          <Link href="/" className='text-white font-bold'>
            Home
          </Link>
        </li>
        <li className='ml-4'>
          <Link href="/joke" className='text-white font-bold'>
            Feeling sad? Here's a Joke For you(CSR)
          </Link>
        </li>

        <li className='ml-4'>
          <Link href="/cat-images" className='text-white font-bold'>
            Generate Cat Image(SSR)
          </Link>
        </li>

        

        <li className='ml-4'>
          <Link href="/user-list" className='text-white font-bold'>
            User List (Implementing API)
          </Link>
        </li>

        <li className='ml-4'>
          <Link href="/ssg" className='text-white font-bold'>
            Contact Us (SSG)
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};



export default NavBar;
