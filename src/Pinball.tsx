import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Papa from "papaparse";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { CircularProgress } from '@mui/material';

export default function Pinball() {

  const defaultData = [{
      id: 1,
      col1: 'data',
      col2: 'data',
      col3: 'data',
      col4: 'data',
      col5: 'data',
      col6: 'data',
      col7: 'data',
      col8: 'data',
      col9: 'data',
      col10: 'data',
      col11: 'data',
      col12: 'data',
      col13: 'data',
      col14: 'data',
      col15: 'data',
      col16: 'data',
    }]

  const [returnedRows, setReturnedRows] = useState<GridRowsProp>(defaultData);

  const sheetsURL= 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQHHB1qQdAe32ZttfefJpkAFL5D6aWAcGTpwXalOayzMUq7VCAFIHwoi-zhjily4N4kjtB33eXFXNCS/pub?gid=1443146497&single=true&output=csv';

  const fetchSheetData = async () => {
    const response = await axios.get(sheetsURL);
    // You might need to convert CSV to JSON here if necessary
    return Papa.parse(response.data);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ['sheetData'],
    queryFn: fetchSheetData
  });

  useEffect(() => {
    if (data) {
      const fetchedData = data.data.map((row: string, i: number) => {
        return {
          id: i,
          col1: row[0],
          col2: row[1],
          col3: row[2],
          col4: row[3],
          col5: row[4],
          col6: row[5],
          col7: row[6],
          col8: row[7],
          col9: row[8],
          col10: row[9],
          col11: row[10],
          col12: row[11],
          col13: row[12],
          col14: row[13],
          col15: row[14],
          col16: row[15],
        }
      })
      setReturnedRows(fetchedData)
    }
  }, [data])

  if (isLoading) return (
    <div>
      <p>Data is Loading...</p>
      <CircularProgress></CircularProgress>
    </div>
  );

  if (error) return <div>An error occurred: {error.message}</div>;

  //Data table
  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Season', width: 100},
    { field: 'col2', headerName: 'Stage', width: 100},
    { field: 'col3', headerName: 'PlayoffLevel', width: 100},
    { field: 'col4', headerName: 'Week', width: 100},
    { field: 'col5', headerName: 'HomeTeam', width: 100},
    { field: 'col6', headerName: 'AwayTeam', width: 100},
    { field: 'col7', headerName: 'Round', width: 100},
    { field: 'col8', headerName: 'Format', width: 100},
    { field: 'col9', headerName: 'Location', width: 100},
    { field: 'col10', headerName: 'Machine', width: 100},
    { field: 'col11', headerName: 'HomePlr1', width: 100},
    { field: 'col12', headerName: 'HomePlr2', width: 100},
    { field: 'col13', headerName: 'AwayPlr1', width: 100},
    { field: 'col14', headerName: 'AwayPlr2', width: 100},
    { field: 'col15', headerName: 'Winner', width: 100},
    { field: 'col16', headerName: 'Two_on_one', width: 100}
  ]
  
  return (
    <>
        <h1>Data from Google Sheets</h1>
        <DataGrid getRowHeight={() => 'auto'} sx={{ height: '70vh', width: '100%' }} rows={returnedRows} columns={columns}/>
    </>
  );
}
