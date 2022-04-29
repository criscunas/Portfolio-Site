import layoutStyles from './Layout.module.scss';
import { Container, Box } from "@material-ui/core"
import Header from '../Header/Header';

export const Layout = ({children}) => {
  return (
    <Container className={layoutStyles.layout} maxWidth="xl" disableGutters>
      <Header />
      <div className={layoutStyles.layout__container}>
        <main className={layoutStyles.layout__content}>{children} </main>
      </div>
    </Container>
  );
}

