import Link from "next/link";
import Logo from "../Logo";

export default function Sidebar() {
  return (
    <div className="w-[18%] py-5 pl-4">
      <div className="mb-10">
        <Logo />
      </div>
      <div className="sidebar__content">
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/dashboard/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
