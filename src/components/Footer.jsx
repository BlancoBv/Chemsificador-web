function Footer() {
  const date = new Date();

  return (
    <div className="sticky-bottom border-top" style={{ height: "10vh" }}>
      <p className="m-3">Chemsificador {date.getFullYear()}</p>
    </div>
  );
}

export default Footer;
