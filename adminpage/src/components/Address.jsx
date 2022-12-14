const Address = ({ phone, email, address, job, showAddress }) => {
  return (
    <>
      <div className="email_phone">
        <code>{email}</code>
        <p>{job}</p>
        {showAddress ? (
          <>
            <p>{address}</p>
            <p>{phone}</p>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Address;
