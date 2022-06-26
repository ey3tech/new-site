import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="45"
      height="45"
      viewBox="0 0 95 95"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId} viewBox="0 0 95 95">
          <path
            d="M32,34.04l-13.87,13.87,10.36,10.36-9.06,9.06L0,47.91,22.93,24.97l9.06,9.06h0Zm19.42,19.42l-8.37,8.37-9.06-9.06,8.37-8.37,9.06,9.06h0ZM47.91,0L24.97,22.93l9.06,9.06,13.87-13.87,10.36,10.36-13.87,13.87,9.06,9.06,13.87-13.87,10.36,10.36-13.87,13.87,9.06,9.06,22.94-22.93L47.91,0h0Zm22.93,72.88l-9.06-9.06-13.87,13.87-10.36-10.36-9.06,9.06,19.42,19.42,22.93-22.93Z"
            style={{ fillRule: 'evenodd' }}
          />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
