import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FirebaseContext } from 'src/components/Firebase';
import { NotificationContext } from 'src/components/Notification';

import ResetPassword, { FormData } from './ResetPassword';

const ResetPasswordContainer: React.FC = () => {
  const firebase = useContext(FirebaseContext);
  const notification = useContext(NotificationContext)!;

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async ({ email }: FormData) => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(firebase.auth, email);
      notification.success(`Password reset email sent to ${email}.`);
    } catch {
      notification.error('Invalid email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet title="Reset Password">
        <meta name="description" content="Forgot your password? Reset here." />
      </Helmet>
      <ResetPassword disabled={loading} onSubmit={handleSubmit} />
    </>
  );
};

export default ResetPasswordContainer;
