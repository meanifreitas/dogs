import React from 'react';
import styles from './UserStatsGraphics.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const UserStatsGraphics = ({ data }) => {
  const [graphic, setGraphic] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphicsData = data.map(item => {
      return {
        x: item.title,
        y: Number(item.acessos)
      };
    });

    setTotal(data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0));
    setGraphic(graphicsData);
  }, [data]);

  return (
  <section className={`animeLeft ${styles.graphics}`}>
    <div className={`${styles.total} ${styles.graphicItem}`}>
      <p>Accesses: {total}</p>
    </div>
    <div className={styles.graphicItem}>
      <VictoryPie
        data={graphic}
        innerRadius={50}
        padding={{
          top: 20,
          bottom: 20,
          left: 80,
          right:80
        }}
        style={{
          data: {
            fillOpacity: .9,
            stroke: '#fff',
            strokeWidth: 2
          },
          labels: {
            fontSize: 14,
            fill: '#333'
          }
        }}
      />
    </div>
    <div className={styles.graphicItem}>
      <VictoryChart>
        <VictoryBar alignment='start' data={graphic}></VictoryBar>
      </VictoryChart>
    </div>
  </section>
  );
}

export default UserStatsGraphics;