const FooterComponent = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-slate-900 text-slate-100 p-4 py-6">
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
