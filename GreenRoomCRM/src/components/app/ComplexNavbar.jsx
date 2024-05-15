/* eslint-disable no-unused-vars */
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  UserCircleIcon,
  CalendarDaysIcon,
  Bars2Icon,
  NewspaperIcon,
  HomeIcon,
  InboxStackIcon,
  MusicalNoteIcon
} from "@heroicons/react/24/solid";



// nav list component
const navListItems = [
  {
    label: "Dashboard",
    icon: HomeIcon,
    href: "/home",
  },
  // {
  //   label: "Clients",
  //   icon: UserCircleIcon,
  //   href: "/events",
  // },
  // {
  //   label: "Leads",
  //   icon: InboxStackIcon,
  //   href: "/events",
  // },
  {
    label: "Events",
    icon: MusicalNoteIcon,
    href: "/events",
  },
  // {
  //   label: "Calendar",
  //   icon: CalendarDaysIcon,
  //   href: "/events",
  // },
  {
    label: "Invoicer",
    icon: NewspaperIcon,
    href: "/invoicer",
  },
  {
    label: "Settings",
    icon: Cog6ToothIcon,
    href: "/settings",
  },


];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">

      {navListItems.map(({ label, icon, href }) => (
        <Typography
          key={label}
          as="a"
          href={href}
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar  className="mx-auto max-w-screen-xl p-2 lg:rounded-lg lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/home"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          GreenRoom CRM
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        {/* <Button size="sm" variant="text">
          <span>Log In</span>
        </Button> */}

      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
