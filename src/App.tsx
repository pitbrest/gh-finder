import { useState } from "react";
import { Container, Header } from "components";
import Search from "components/Search";
import UserCard from "components/UserCard";
import { LocalGithubUser } from "types";
import TransformUser from "utils/TransformUser";
// import defaultUser from "mock";

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(null);
  const [respStatus, setRespStatus] = useState<boolean>(true);

  const BASE_URL = "https://api.github.com/users/";

  const fetchUser = async (userName: string) => {
    const url = BASE_URL + userName;
    const resp = await fetch(url);
    const user = await resp.json();
    if (user.id) {
      setUser(TransformUser(user));
      setRespStatus(true);
    } else {
      setUser(null);
      setRespStatus(!respStatus);
    }
  };

  return (
    <Container>
      <Header />
      <Search
        hasError={!respStatus}
        onSubmit={fetchUser}
      />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
