import React, { useState, useEffect } from "react";
import api from "../../api";
import moment from "moment";
import { Link } from "react-router-dom";
import {
  MdGamepad,
  MdPermContactCalendar,
  MdPersonPinCircle
} from "react-icons/md";

import { Container, User, Thumb, ShowLoading } from "./styles";
import loading from "../../images/tail-spin.svg";

export default function Single(props) {
  const { userId } = props.match.params;
  const [user, setUser] = useState({});
  const [loadingUsers, setLoadingUsers] = useState(true);

  useEffect(() => {
    async function loadDev() {
      const userData = await api.get(`/users/${userId}`);
      setUser(userData.data);
      setLoadingUsers(false);
    }

    loadDev();
  }, [userId]);

  return (
    <Container>
      {loadingUsers ? (
        <ShowLoading style={{ display: loadingUsers ? "block" : "none" }}>
          <img src={loading} alt="" />
        </ShowLoading>
      ) : (
        <>
          <User>
            <div>
              <Thumb src={user.avatar_url} alt={user.name} />
            </div>
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <div className="infos">
              <span>
                <MdGamepad size={30} />
                {user.public_repos}
              </span>
              <span>
                <MdPersonPinCircle size={30} />
                {user.followers}
              </span>
              <span>
                <MdPermContactCalendar size={30} />
                {moment(user.created_at).format("DD/MM/YYYY")}
              </span>
            </div>
          </User>
        </>
      )}
      <Link to="/" className="linkBack">
        Voltar
      </Link>
    </Container>
  );
}
