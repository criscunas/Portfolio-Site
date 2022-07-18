import styles from "./Layout.module.scss";
import { Container} from "@material-ui/core";
import Header from "./Header/Header";

export const Layout = ({ children }) => {
    return (
        <Container className={styles.layout} maxWidth="xl" disableGutters>
            <div className={styles.layout__container}>
                <main className={styles.layout__content}>
                    <Header />
                    {children}
                </main>
            </div>
        </Container>
    );
};
