// Components
import Logo from '@/components/Logo';
import UserMenu from '@/components/UserMenu';

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between bg-primary dark:bg-slate-700 text-white py-2 px-5">
      <Logo />
      <UserMenu />
    </div>
  );
}

export default Navbar;