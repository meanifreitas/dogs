import React from 'react';
import Head from '../Helper/Head';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import useFetch from '../../Hooks/useFetch';
import { GET_STATS } from '../../api';
const UserStatsGraphics = React.lazy(() => import('./UserStatsGraphics'));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }

    getData();
  }, [request]);

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title='Statistics' description='Profile statistics'/>
        <UserStatsGraphics data={data}/>
      </React.Suspense>
    );
  else return null;
}

export default UserStats;