import { CaretRight, ImageSquare, List } from '@phosphor-icons/react';
import { NavLinks } from '../config/nav-links';

export const SideMenu = () => {
  return (
    <div className='flex flex-shrink-0 flex-col justify-between bg-default h-full w-11 hover:w-[220px] transition-all mr-4 p-2 px-1 rounded-md overflow-hidden'>
      <div>
        <div className='flex gap-3 center items-center opacity-50 ml-2'>
          <List size={20} weight='bold' />
          <p>Menu</p>
        </div>
        <nav className='flex flex-col gap-1 w-full mt-4'>
          {NavLinks.map((link) => (
            <div
              className='flex cursor-pointer justify-between center items-center h-6 w-full transition-all hover:bg-default-100 py-5 px-2 rounded-md'
              key={link.href}
            >
              <div className='flex items-center gap-3'>
                {link.icon}
                <a href={link.href} className='text-nowrap'>
                  {link.label}
                </a>
              </div>
              <CaretRight weight='bold' opacity={0.5} className='justify-self-end' />
            </div>
          ))}
        </nav>
      </div>
      <div className='flex gap-3 center items-center ml-2'>
        <ImageSquare size={20} weight='bold' />
        <h1 className='text-[20px]'>Name</h1>
      </div>
    </div>
  );
};
