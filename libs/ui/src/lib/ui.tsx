import styles from './ui.module.css';

/* eslint-disable-next-line */
export interface UIProps {}

export function UI(props: UIProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Halcyon UI!</h1>
    </div>
  );
}

export default UI;
