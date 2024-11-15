'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function ThemeToggler() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      {/* Button trigger for theme toggle */}
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='icon'  // Use icon size for the button
          className='relative bg-slate-700 hover:bg-slate-600 border-0 p-2 mr-5 sm:p-3 sm:mr-3 md:p-4 md:mr-4'>
          
          {/* Sun Icon for Light Theme */}
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          
          {/* Moon Icon for Dark Theme */}
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          
          {/* Screen Reader Text */}
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown menu for theme options */}
      <DropdownMenuContent align='end' className='sm:hidden'>
        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeToggler;
