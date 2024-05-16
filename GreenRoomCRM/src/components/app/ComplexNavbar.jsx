/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  MenuItem,
  IconButton,
  Button,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  UserCircleIcon,
  CalendarDaysIcon,
  Bars2Icon,
  NewspaperIcon,
  HomeIcon,
  InboxStackIcon,
  MusicalNoteIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import pb from "../../pocketbaseClient";

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

// eslint-disable-next-line react/prop-types
export function ComplexNavbar({ onLogout }) {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [username, setUsername] = useState("");

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );

    // Fetch the currently logged-in user's data
    const fetchUserData = async () => {
      try {
        const userId = pb.authStore.model?.id;
        if (userId) {
          const user = await pb.collection("users").getOne(userId);
          setUsername(user.username);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleSignOut = () => {
    pb.authStore.clear();
    onLogout();
  };

  return (
    <Navbar fullWidth className="mb-5 p-2 lg:rounded-lg lg:pl-6">
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
        <div className="ml-auto mr-2 flex items-center">
          <Typography variant="small" className="mr-4">
          Hello, {username.charAt(0).toUpperCase() + username.slice(1)}!
          </Typography>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-2"
            onClick={handleSignOut}
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            Sign Out
          </Button>
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="lg:hidden"
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
        </div>
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
