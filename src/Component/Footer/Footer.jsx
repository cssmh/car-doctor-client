import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="footer py-12 px-20 bg-black text-white">
      <aside>
        <img src={logo} className="w-16" alt="" />
        <p>
          Car Doctor Ltd.
          <br />
          Providing reliable services since 1999.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">About</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
