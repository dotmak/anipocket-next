import Link from 'next/link';
import Search from '@/app/components/Search';

export default function Header() {
  return (
    <header className="p-4 fixed w-full z-100">
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <div className="first flex flex-row gap-4 items-center">
            <h1>AniPocket</h1>
            <Search />
          </div>
          <nav className="flex space-x-4">
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              News
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
