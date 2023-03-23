const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-neutral-100 p-6">
      <span className="text-sm">Copyright &copy; 2023 Ryan Moody</span>
      <a
        className="font-bold"
        href="https://github.com/ryanmoody/aviation-weather"
      >
        View Source on GitHub
      </a>
    </footer>
  );
};

export default Footer;