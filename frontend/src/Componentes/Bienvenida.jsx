import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AppStyles from '../App.module.scss'
import styles from './styles.module.scss'

const Bienvenida = () => {

  const [name, setName] = useState();

  const navigate = useNavigate();

  //const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:3000/user/${id}")
      .then(({ data }) => setName(data.nombre))
      .catch((error) => console.error(error));
  })
  return (
    <div className={AppStyles.container}>
      <div>
        <div className={styles.welcome}>
          <h3>{name ? "Felicitaciones ${name} |" : "Que estás haciendo?"}</h3>
          <h2>{name ? "Te pudiste logear correctamente" : "Te estamos viendo..."}</h2>
          <div className={styles.buttons}>
            <button onClick={() => navigate('/')}>Continuar</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Bienvenida
