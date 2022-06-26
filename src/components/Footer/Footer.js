import { Link } from 'components/Link';
import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} Ey3 Technologies.`}
      </span>
      created by{' '}
      <Link style={{ color: '#5966f3' }} href="https://terabyteis.me">
        thrzl
      </Link>
      . Heavily inspired by{' '}
      <Link secondary className={styles.link} href="https://hamishw.com" target="_self">
        Hamish Williams
      </Link>
    </Text>
  </footer>
);
