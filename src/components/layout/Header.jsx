import Logo from '../../assets/Logo.svg';

const Header = () => {
  return (
    <header className="mb-10 flex items-center justify-start bg-neutral-100 p-4">
      <img className="h-100" height={84} width={152} src={Logo} />
    </header>
  );
};

export default Header;
