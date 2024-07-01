import { Link } from 'components/Link';
import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';
import { cssProps } from 'utils/style';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} Ey3 Technologies.`}
      </span>
      Created by{' '}
      <Link secondary className={styles.link} href="https://hamishw.com" target="_self">
        Hamish Williams
      </Link>. Adapted by{' '}
      <Link className={styles.link}  style={cssProps({ linkColor: '89 102 243' })} href="https://thrzl.xyz">
        thrzl
      </Link>
      .
    </Text>
  </footer>
);
