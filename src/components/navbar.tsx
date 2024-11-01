import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Settings,
  User,
  LogIn,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useConvexAuth, Authenticated, Unauthenticated } from 'convex/react';
import { useUser, SignInButton, SignOutButton } from '@clerk/clerk-react';
import { BurgerMenu, Mountain } from './icons';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function Navbar() {
  const { user } = useUser();
  const { isLoading } = useConvexAuth();

  return (
    <header className='flex items-center w-full h-20 px-4 shrink-0 md:px-6'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='lg:hidden'>
            <BurgerMenu className='w-6 h-6' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <Link to='/'>
            <Mountain className='w-6 h-6' />
            <span className='sr-only'>Acme Inc</span>
          </Link>
          <div className='grid gap-2 py-6'>
            <Link
              to='/'
              className='flex items-center w-full py-2 text-lg font-semibold'
            >
              Home
            </Link>
            <Link
              to='/'
              className='flex items-center w-full py-2 text-lg font-semibold'
            >
              About
            </Link>
            <Link
              to='/'
              className='flex items-center w-full py-2 text-lg font-semibold'
            >
              Services
            </Link>
            <Link
              to='/'
              className='flex items-center w-full py-2 text-lg font-semibold'
            >
              Portfolio
            </Link>
            <Link
              to='/'
              className='flex items-center w-full py-2 text-lg font-semibold'
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link to='/' className='hidden mr-6 lg:flex'>
        <Mountain className='w-6 h-6' />
        <span className='sr-only'>Mountel Inc</span>
      </Link>
      <NavigationMenu className='hidden lg:flex'>
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              to='/'
              className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
            >
              Home
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              to='/'
              className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
            >
              About
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              to='/'
              className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
            >
              Services
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              to='/'
              className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
            >
              Portfolio
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              to='/'
              className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      {!isLoading ? (
        <>
          <Unauthenticated>
            <SignInButton>
              <Button className='ml-auto'>
                <LogIn />
                Sign in
              </Button>
            </SignInButton>
          </Unauthenticated>
          <Authenticated>
            <DropdownMenu>
              <DropdownMenuTrigger className='ml-auto'>
                <Avatar>
                  <AvatarImage src={user?.imageUrl}></AvatarImage>
                  <AvatarFallback>{user?.fullName}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Keyboard />
                    <span>Keyboard shortcuts</span>
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Github />
                  <span>GitHub</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LifeBuoy />
                  <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Cloud />
                  <span>API</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <SignOutButton>
                    <div>
                      <LogOut />
                      <span>Log out</span>
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </div>
                  </SignOutButton>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Authenticated>
        </>
      ) : null}
    </header>
  );
}
