import React, { useEffect, useState } from 'react';
import firebase from './firebase';
// import { Login } from './modules/pages/Login';

const App: React.FC = () => {
  const [users, setUsers] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('users').get();
      setUsers(data.docs.map((item: any) => item.data()));
    };
    fetchData();
  }, []);
  console.log(users);
  return (
    <div>
      <div>
        {users?.map((item: any) => (
          <p>{item.email}</p>
        ))}
      </div>
    </div>
  );
};

export { App };
