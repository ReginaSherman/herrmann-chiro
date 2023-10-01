import Image from "next/image";
import logo from "public/footer-logo.png";
import "../styles/globals.scss";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="wrapper">
        <Image src={logo} alt="alt" />
        <nav className="navbar">
          <ul>
            <li className="bold">Navigation</li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>New Patient</a>
            </li>
            <li>
              <a>What to Expect</a>
            </li>
            <li>
              <a>Location</a>
            </li>
          </ul>
        </nav>

        <nav className="navbar">
          <ul>
            <li className="bold">Office Hours</li>
            <li className="bold">Monday, Wednesday, & Thursday:</li>
            <li>8:00am–12:00pm, 2:00pm–6:00pm</li>
            <li className="bold">Tuesday:</li>
            <li>8:00am–12:00pm, 2:00pm–5:00pm</li>
          </ul>
        </nav>

        <nav className="navbar">
          <ul>
            <li className="bold">Open one Saturday a month:</li>
            <li>9:00am–11:00am</li>
            <li className="bold italic">Closed on Fridays & Weekends</li>
          </ul>
        </nav>

        <nav className="navbar">
          <ul>
            <li className="bold">Mailing Address</li>
            <li>2315 Sunset Blvd</li>
            <li>Steubenville, Ohio 43952</li>
            <li className="bold">Phone Number</li>
            <li>??</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
