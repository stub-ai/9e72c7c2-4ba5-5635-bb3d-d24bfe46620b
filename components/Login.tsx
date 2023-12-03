import React, { useState } from 'react';

const Login = () => {
  const [declined, setDeclined] = useState(false);

  const handleAccept = () => {
    window.location.href = document.referrer;
  };

  const handleDecline = () => {
    setDeclined(true);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {declined ? (
        <p className="text-xl text-red-500">You can&apos;t access BluegrassID</p>
      ) : (
        <>
          <p className="mb-5">Do you accept the terms and conditions?</p>
          <div>
            <button
              className="px-4 py-2 mr-2 text-white bg-green-500 rounded"
              onClick={handleAccept}
            >
              Accept
            </button>
            <button
              className="px-4 py-2 text-white bg-red-500 rounded"
              onClick={handleDecline}
            >
              Decline
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;