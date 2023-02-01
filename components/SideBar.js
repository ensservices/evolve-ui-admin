import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import {
  
  ChevronDownIcon
} from "@heroicons/react/24/solid";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-dark shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img
            className="w-32 h-auto"
            src="/Logodesign.png"
            alt="company logo"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <Link   className="text-decoration-none" href="/home">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/"
                ? "bg-orange-100 text-red-500"
                : "text-gray-100 hover:bg-light-100 hover:text-red-500"
              }`}
          >
            <div className="mr-2 ">
              <HomeIcon className="h-5 w-5 mb-3" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>
        <Link  className="text-decoration-none" href="/user">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/account"
                ? "bg-orange-100 text-red-500"
                : "text-gray-100 hover:bg-light-100 hover:text-red-500"
              }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5 mb-3" />
            </div>
            <div >
              <p>User</p>
              {/* <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-700" /> */}
            </div>
          </div>
        </Link>
        <Link   className="text-decoration-none" href="/courses">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/billing"
                ? "bg-orange-100 text-red-500"
                : "text-gray-100 hover:bg-light-100 hover:text-red-500"
              }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5 mb-3" />
            </div>
            <div>
              <p>Courses</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
