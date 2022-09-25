import React from 'react';
import styles from './index.module.scss';

export default function Index() {
  return (
    <div className={styles.header}>
      <div className={styles.personal_image}>
        <img src="./Nick_Photo.jpg" alt="" />
      </div>
      <div className={styles.about}>
        <h1>Yu Yao</h1>
        <br />
        <i>Postdoctoral Research Fellow</i>
        <br />
        Address: J12/ 1 Cleveland St, Darlington, NSW 2008, Australia
        <br />
        Email: yyao0814 [at] uni.sydney.edu.au
        <br />
        <br />
        <a href="https://www.tmllab.ai/">Trustworthy Machine Learning Lab</a>
        (TML Lab)
        <br />
        <a href="https://sydney.edu.au/">University of Sydney</a> (USYD)
        <br />
        <a href="https://www.unsw.edu.au/">Computer Science and Engineering</a>
        (CSE)
        <br />
        <p>
          My name is Yu Yao. I am a PhD candidate under the supervision of Prof.
          Tongliang Liu In USYD. I have completed bachelor degree with
          first-class Honours from UNSW. My research interests lie in causal
          inference and trusthworthy machine learning.
        </p>
      </div>
    </div>
  );
}
