import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
      <Link href={'/female'} className='cursor-pointer hover:text-gray-700' >Female</Link>
      <Link href={'/male'} className='cursor-pointer hover:text-gray-700' >Male</Link>
      <Link href={'kids'} className='cursor-pointer hover:text-gray-700' >Kids</Link>
      <Link href={'/products'} className='cursor-pointer hover:text-gray-700' >All Products</Link>
    </div>
  );
};

export default Menu;
