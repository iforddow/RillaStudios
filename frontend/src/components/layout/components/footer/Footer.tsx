export default function Footer() {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} Rilla Studios. All rights reserved.
      </p>
      <nav>
        <ul>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms of Service</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
