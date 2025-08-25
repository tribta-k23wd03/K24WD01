import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: boolean;
}
function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, isLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        isLoading(true); // hiển thị đang tải dữ liệu
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) throw new Error("Failed to fetch users");

        const data: User[] = await res.json();
        setUsers(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        isLoading(false); // tắt hiển thị
      }
    };

    fetchUser();
  }, []);

  if (loading) return <p>Data is download...</p>;
  if (error) return <p>Internal Server Error: {error}</p>;

  return (
    <div>
      <h2>User List</h2>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <strong>{u.name}</strong> - <i>{u.username}</i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
