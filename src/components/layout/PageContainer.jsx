function PageContainer({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-content px-margin-mobile md:px-margin ${className}`}
    >
      {children}
    </div>
  );
}

export default PageContainer;