import styles from './page.module.css';

/* eslint-disable-next-line */
export interface TestPageProps {}

export function TestPage(props: TestPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TestPage!</h1>
    </div>
  );
}

export default TestPage;
