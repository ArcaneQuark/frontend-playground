import React, { useEffect, useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@material-ui/core';


async function tracklist(album) {
  return fetch(album.resource_url).then(
    (response) => response.json()
  ).then((data) => data.tracklist);
}

async function mechsSongs() {
  const id = '4626370';
  const releaseUrl = `https://api.discogs.com/artists/${id}/releases`;
  const releases = fetch(releaseUrl).then(
    (request) => request.json()
  ).then(
    (data) => data.releases
  );

  const songs = releases.then((albums) => albums.flatMap(
    (album) => tracklist(album).then((tracks) => tracks.map((track) => {
      const obj = {};
      obj.track = track.title;
      obj.album = album.title;
      obj.year = album.year;
      obj.search = encodeURI(`https://genius.com/search?q=${track.title} mechanisms`);
      return obj;
    }))
  ));
  return Promise.all(await songs).then((arr) => arr.flat());
}


// export default function SongTable() {
//   const resp = mechsSongs();
//   console.log('hello');
//   console.log(resp);
//   console.log('hello');
//   return (
//     <div>
//       Tales to Be Told
//       {/* {{ resp }} */}
//     </div>
//   );
// }

export default function SongTable() {
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [data, setData] = useState([]);
  const isError = false;
  const isLoading = false;
  const isRefetching = false;
  const [sorting, setSorting] = useState([]);
  const [rowCount, setRowCount] = useState(0);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10
  });

  useEffect(() => {
    async function getData() {
      const resp = await mechsSongs();
      // window.alert(resp);
      // console.log(resp);
      // setData(resp);
      // setData([{ track: 'Trial By Song', album: 'Ulysses Dies at Dawn', year: 2014 }]);
      setData(resp);
      setRowCount(resp.length);
      // console.log(resp);
    }
    getData();
  }, [columnFilters, globalFilter, pagination.pageIndex, pagination.pageSize, sorting]);


  const columns = useMemo(() => [
    {
      accessorKey: 'track',
      // accessorFn: (obj) => <Link obj={obj} />,
      header: 'Song'
    },
    {
      accessorKey: 'album',
      header: 'Album'
    },
    {
      accessorKey: 'year',
      header: 'Year'
    }
  ], []);


  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      getRowId={(row) => row.song}
      initialState={{ showColumnFilters: true, showGlobalFilter: true }}
      muiToolbarAlertBannerProps={
        isError
          ? {
            color: 'error',
            children: 'Error loading data'
          }
          : undefined
      }
      onColumnFiltersChange={setColumnFilters}
      onGlobalFilterChange={setGlobalFilter}
      onPaginationChange={setPagination}
      onSortingChange={setSorting}
      rowCount={rowCount}
      state={{
        columnFilters,
        globalFilter,
        isLoading,
        pagination,
        showAlertBanner: isError,
        showProgressBars: isRefetching,
        sorting
      }}
      enableRowActions
      positionActionsColumn='last'
      renderRowActions={({ row }) => (
        <Box>
          <Button onClick={() => window.open(encodeURI(`https://genius.com/search?q=${row.original.track} mechanisms`))}> Lyrics </Button>
        </Box>
      )}
      displayColumnDefOptions={{
        'mrt-row-actions': {
          header: 'Search Lyrics'
        }
      }}

    />

  );
}
