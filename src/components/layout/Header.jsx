import Logo from '../../assets/LogoImage.svg';
import StationForm from '../forms/StationForm';

const Header = () => {
  return (
    <header className="container mx-auto mb-10 flex flex-col gap-12 bg-neutral-100 py-4 md:flex-row md:items-end md:justify-between">
      <img height={84} width={152} src={Logo} />
      <StationForm />
    </header>
  );
};

export default Header;
