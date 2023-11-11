'use client';

import { MenuOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';

import { NAV_MENU } from '@/constants';
import { useHeader } from '@/hooks';

const fontSize = 25;

const Header: FC = () => {
  const { scroll } = useHeader();
  const pathName = usePathname();

  return (
    <header className={`${scroll ? 'fixed top-0' : ''} z-50 w-full`}>
      <nav id="container_header" className="bg-transparent px-4 lg:px-10">
        <div className="mx-auto flex items-center justify-between">
          <Button className="flex lg:hidden" type="link">
            <MenuOutlined />
          </Button>
          <div className="flex items-center justify-center gap-6">
            <Link href="/">
              <Image
                src="/assets/images/psyduck.png"
                alt="logo"
                width={60}
                height={60}
              />
            </Link>
            <Input placeholder="Search something..." />
            <ul className="hidden flex-col items-center font-medium lg:flex lg:flex-row lg:space-x-8 xl:space-x-10">
              {NAV_MENU.map((item) => (
                <Link
                  key={Math.random()}
                  href={item.path}
                  className={`${
                    item.path.startsWith(pathName!)
                      ? 'text-primary'
                      : 'text-black'
                  } flex transition-colors hover:text-primary`}
                >
                  <item.icon style={{ fontSize }} />
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex w-auto items-center gap-4">
            <Link href="/auth/sign-in">
              <Button type="primary">Sign In</Button>
            </Link>
            <Link href="/auth/sign-up">
              <Button type="link">Sign Up</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
