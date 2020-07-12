import Head from 'next/head';
import Layout from '../components/Layout';
import Byline from '../components/Byline';

const dataList = [
  { date: '2019/01', value: 200 },
  { date: '2019/02', value: 140 },
  { date: '2019/03', value: 300 },
  { date: '2019/04', value: 230 },
  { date: '2019/05', value: 300 },
  { date: '2019/06', value: 40 },
  { date: '2019/07', value: 370 },
  { date: '2019/08', value: 400 },
  { date: '2019/09', value: 430 },
  { date: '2019/10', value: 440 },
  { date: '2019/11', value: 450 },
  { date: '2019/12', value: 360 },
];

export const config = {
  amp: true,
};

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Monthly list bar chart sample (with AMP)</title>
      </Head>
      <h1>Monthly list bar chart sample (with AMP)</h1>
      <Byline author="shinshin86" />
      <p className="caption">Monthly Food Costs</p>
      <div className="monthly-list-container">
        <ul>
          {dataList.map(({ date, value }) => (
            <li className="monthly-list" key={date}>
              <span className="barText">{value}</span>
              <span className="bar" style={{ height: value }}></span>
              <span className="barText">{date}</span>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        h1 {
          margin-bottom: 5px;
        }
        p {
          font-size: 18px;
          line-height: 30px;
          margin-top: 30px;
        }
        .caption {
          color: #ccc;
          margin-top: 0;
          font-size: 14px;
          text-align: center;
        }
        /* bar chart style */
        .monthly-list-container {
          padding: 4px;
          background: #555;
        }

        .monthly-list {
          margin: 0 4px;
          padding: 0 4px;
          display: inline-block;
          text-align: center;
        }

        .barText {
          color: #fff;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .bar {
          display: block;
          background-color: #eee;
          border-radius: 5px;
        }

        .bar:hover {
          background-color: #1cc;
          cursor: pointer;
        }

        .barText:hover {
          color: #1cc;
        }
      `}</style>
    </Layout>
  );
}
