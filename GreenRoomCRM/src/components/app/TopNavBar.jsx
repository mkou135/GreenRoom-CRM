function TopNavBar() {
    return (
      <nav className="flex items-center justify-between bg-teal-500 p-2 w-full">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            GreenRoom CRM
          </span>
        </div>
        <div className="hidden lg:block"></div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="/home"
              className="sm:block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 inline-block"
            >
              Dashboard
            </a>
            <a
              href="/events"
              className="sm:block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 inline-block"
            >
              Events
            </a>
            <a
              href="/invoicer"
              className="sm:block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 inline-block"
            >
              Invoicer
            </a>
            <a
              href="/settings"
              className="sm:block lg:inline-block lg:mt-0 text-teal-200 hover:text-white inline-block"
            >
              Settings
            </a>
          </div>
        </div>
      </nav>
    );
  }
  
  export default TopNavBar;
  