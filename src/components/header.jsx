import styles from './header.module.css';
import igniteLogo from '../img/logo.svg';

console.log(igniteLogo);

export function Header(){
    return(
        <header className={styles.header}>
        <img src="/src/img/logo.svg" alt="" />
        <form action="">
            <textarea 
            name="addTarefa" 
            placeholder='Adicionar uma nova tarefa'
            ></textarea>
        </form>
        </header>
    )
}