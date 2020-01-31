import React, { useState, useEffect } from "react";
import api from "../../api";
import { Link } from "react-router-dom";
import { MdEmail, MdLink } from "react-icons/md";

import {
  Container,
  Organization,
  Thumb,
  Content,
  Users,
  ShowLoading
} from "./styles";
import loading from "../../images/tail-spin.svg";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [organization, setOrganization] = useState({});
  const [search, setSearch] = useState("");
  const [loadingUsers, setLoadingUsers] = useState(true);

  useEffect(() => {
    async function loadDevs() {
      const userData = await api.get("/orgs/grupotesseract/public_members");
      const orgsData = await api.get("/orgs/grupotesseract");
      setUsers(userData.data);
      setOrganization(orgsData.data);
      setLoadingUsers(false);
    }

    loadDevs();
  }, []);

  function filterUsers(usersState, term = search) {
    return usersState.filter(user => {
      return user.login.toLowerCase().includes(term.toLocaleLowerCase());
    });
  }

  return (
    <Container>
      {loadingUsers ? (
        <ShowLoading style={{ display: loadingUsers ? "block" : "none" }}>
          <img src={loading} alt="" />
        </ShowLoading>
      ) : (
        <>
          <Organization>
            <div>
              <Thumb src={organization.avatar_url} alt={organization.name} />
            </div>
            <h2>{organization.name}</h2>
            <p>{organization.description}</p>
            <div className="links">
              <a
                href={`mailto:${organization.email}`}
                rel="noopener noreferrer"
              >
                <MdEmail size={20} />
              </a>
              <a
                href={organization.blog}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdLink size={20} />
              </a>
            </div>
          </Organization>
          <Content>
            <input
              type="text"
              placeholder="Pesquise seus devs..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <Users>
              {filterUsers(users).map(user => (
                <li key={user.id}>
                  <header>
                    <Thumb src={user.avatar_url} alt={user.login} />
                    <div className="user-info">
                      <strong>{user.login}</strong>
                    </div>
                  </header>
                  <Link to={`/${user.login}`}>Acessar Perfil GitHub</Link>
                </li>
              ))}
            </Users>
          </Content>
        </>
      )}
    </Container>
  );
}
