import type { NextPage } from 'next'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../src/state";
import { bindActionCreators } from "redux";
import { State } from "../src/state/reducers/index";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const { depositarDinheiro, sacarDinheiro, ZerarValor } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const state = useSelector((state: State) => state.bank);

  const escolherValor = 3000;

  return (
    <div className={styles.container}>
      <Head>
        <title>Contador</title>
        <meta name="description" content="Contador" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.titulo}>React-Redux</div>
          <div>
            <h1>{state}</h1>
          </div>
          <div className={styles.btnContainer}>
            <button
              className={styles.btn}
              onClick={() => depositarDinheiro(escolherValor)}
            >
              Adicionar
            </button>
            <button
              className={styles.btn}
              onClick={() => sacarDinheiro(escolherValor)}
            >
              Diminuir
            </button>
            <button
              className={styles.btn}
              onClick={() => ZerarValor(escolherValor)}
            >
              Zerar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


