import "../styles/header.css";

function PageHeader({ storeName, tagLine, total }) {
  return (
    <header>
      <div className='main-header-content'>
        <h1>{storeName}</h1>
        <p>{tagLine}</p>
      </div>
      <div>
        <p>Total: ₦{total.toLocaleString()}</p>
      </div>
    </header>
  );
}

export default PageHeader;
