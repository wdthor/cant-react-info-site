export function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8 px-16 bg-grey-800">
      <section className="flex items-center gap-8">
        <img src="../src/assets/react.svg" alt="logo" />
        <h2 className="text-primary">React Facts</h2>
      </section>
      <h3 className="text-grey-100">React Course - Project 1</h3>
    </nav>
  );
}
