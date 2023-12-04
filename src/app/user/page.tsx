"use client";

import { useUser } from "@/hooks/useUsers";

const Users = () => {
  const { data, isLoading } = useUser();
  return (
    <>
      <h2>Total user: {isLoading ? "Loading" : data?.length}</h2>
    </>
  );
};

export default Users;
