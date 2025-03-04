const FooterComponent = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content mt-5 p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Ndimofor Aretas
        </p>
      </aside>
    </footer>
  );
};
export default FooterComponent;
