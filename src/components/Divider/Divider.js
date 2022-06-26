import { classes, cssProps, numToMs } from 'utils/style';
import styles from './Divider.module.css';

export const Divider = ({
  lineWidth,
  lineHeight,
  notchWidth,
  notchHeight,
  collapseDelay,
  collapsed,
  className,
  style,
  color,
  ...rest
}) => (
  <div
    className={classes(styles.divider, className)}
    style={cssProps(
      {
        lineWidth: lineWidth,
        lineHeight: lineHeight,
        notchWidth: notchWidth,
        notchHeight: notchHeight,
        collapseDelay: numToMs(collapseDelay),
      },
      style
    )}
    {...rest}
  >
    <div
      className={styles.line}
      data-collapsed={collapsed}
      style={{ backgroundColor: color }}
    />
    <div
      className={styles.notch}
      data-collapsed={collapsed}
      style={cssProps(
        { collapseDelay: numToMs(collapseDelay + 160) },
        { backgroundColor: color }
      )}
    />
  </div>
);

Divider.defaultProps = {
  lineWidth: '100%',
  lineHeight: '2px',
  notchWidth: '90px',
  notchHeight: '10px',
  collapsed: false,
  collapseDelay: 0,
};
