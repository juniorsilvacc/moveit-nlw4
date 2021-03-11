import styles from '../styles/components/Profile.module.css';

export function Porfile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/43589505?s=460&u=7c7159850e84526c0127a00fa34e70da1a938e4f&v=4" alt="Imagem"/>
            <div>
                <strong>Júnior Silva</strong>             
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level 1
                </p>
            </div>
        </div>
    );
}