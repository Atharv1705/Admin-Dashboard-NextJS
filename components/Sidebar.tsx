'use client';  // Marking the component as client-side

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import {
  LayoutDashboard,
  Newspaper,
  Folders,
  CreditCard,
  Settings,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);  // State to control sidebar visibility

  return (
    <>
      {/* Hamburger Menu Button for Mobile/Tablet */}
      <button
        className="sm:hidden p-4 absolute top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-icons">menu</span> {/* You can replace this with an icon component */}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-secondary rounded-none fixed top-0 left-0 h-full transition-all duration-300 ease-in-out ${
          isOpen ? 'w-64' : 'w-0'
        } sm:w-64 sm:relative sm:h-auto sm:block`}
      >
        <Command className="h-full">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <Link href="/">Dashboard</Link>
              </CommandItem>
              <CommandItem>
                <Newspaper className="mr-2 h-4 w-4" />
                <Link href="/posts">Posts</Link>
              </CommandItem>
              <CommandItem>
                <Folders className="mr-2 h-4 w-4" />
                <Link href="#">Categories</Link>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>

      {/* Overlay for Mobile */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:hidden fixed inset-0 bg-black bg-opacity-50 z-40`}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
};

export default Sidebar;
