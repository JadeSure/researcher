import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './index.module.scss';

export default function Index() {
  const [paperData, setPaperData] = useState(null);

  const fetchData = async () => {
    const url = `https://dt6sa5t8f9.execute-api.ap-southeast-2.amazonaws.com/prod/nickprofile`;

    try {
      const { data } = await axios.get(url);
      setPaperData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Publications &amp; Preprints</h2>
      {paperData && (
        <table>
          <tr className={styles.table_title}>
            {/* <th>Title</th> */}
            <th></th>
            <th>Cited By</th>
            <th>Year</th>
          </tr>
          {paperData.details.articles.map((paper) => {
            return (
              <tr>
                <td>
                  <div className={styles.table_content}>
                    <a href={paper.link}>{paper.title}</a>
                  </div>
                  <div>{paper.authors}</div>
                  <div>{paper.publication}</div>
                </td>

                <td>
                  <span>{paper.cited_by.value}</span>
                </td>
                <td>
                  <span>{paper.year}</span>
                </td>
              </tr>
            );
          })}
        </table>
      )}

      <div className={styles.table_education}>
        <h2>Education</h2>
        <table id="gsc_a_t">
          <tbody id="gsc_a_b">
            <tr class="gsc_a_tr">
              <td class="gsc_a_t">
                <div class="gsc_a_at">
                  University of Sydney, School of Computer Science
                </div>
                <div class="gs_gray">
                  Ph.D. Candidate in Machine Learning, 03/2019 - 08/2022
                </div>
                <div class="gs_gray">
                  Supervisor:
                  <a href="https://tongliang-liu.github.io/">Tongliang Liu</a>,
                  <a href="https://www.sydney.edu.au/engineering/about/our-people/academic-staff/dacheng-tao.html">
                    Dacheng Tao
                  </a>
                  <br />
                </div>
              </td>
            </tr>
            <tr class="gsc_a_tr">
              <td class="gsc_a_t">
                <div class="gsc_a_at">
                  University of New South Wales, School of Computer Science and
                  Engineering
                </div>
                <div class="gs_gray">
                  B.Sc. (Hons) in Software Engineering, 07/2015-07/2018
                </div>
                <div class="gs_gray">
                  Supervisor:
                  <a href="https://www.linkedin.com/in/joshua-w-k-ho-a0489434/?originalSubdomain=hk">
                    Joshua Ho
                  </a>
                  <br />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
      </div>

      <h2>Academic Service</h2>
      <div class="gsc_a_aw">
        <p>Workflow Chair: IJCAI workshop 2021</p>
        <p>
          Conference Reviewer: NeurIPS, ICML, ICLR, AISTATS, UAI, CVPR, ICCV,
          ECCV, SIGKDD, AAAI, IJCAI, etc.
        </p>
        <p>Journal Reviewer: TMLR, MLJ, TKDE, TNN, etc.</p>
      </div>
      <br />

      <h2>Awards</h2>
      <div class="gsc_a_aw">
        <p>
          School of Computer Science Research Students Excellence Prize, 2019
        </p>
        <p>
          The commBank Year 4 Prize (the highest WAM in the honours year), 2019
        </p>
        <p>The Displayr Thesis Prize (the best performance in Thesis), 2018</p>
        <p>The CSE Undergraduate Performance Price (7th place), 2018</p>
      </div>
      <br />

      <hr />
    </div>
  );
}
