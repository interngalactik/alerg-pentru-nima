import { useEffect, useState } from 'react';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function RacesTable() {
    const [csvData, setCsvData ] = useState([]);

    useEffect(() => {
        fetchCsvData()
    }, []);

    const fetchCsvData = () => {
        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSHYqZ9S0Q9pbMy97P1rYquyNr9897G6LsV_YP4_bBRxyoX-3hOspdM-iR0Z7Nf15JByZhvLwDwTMES/pub?output=csv';

        axios.get(csvUrl)
        .then((response) => {
            const parsedCsvData = parseCsv(response.data);
            setCsvData(parsedCsvData);
        })
        .catch((error) => {
            console.error('Error fetching CSV data: ', error)
        })
    }

    function parseCsv(csvText) {
        const rows = csvText.split(/\r?\n/);        // Use a regular expression to split the CSV text into rows while handling '\r'
        const headers = rows[0].split(',');        // Extract headers (assumes the first row is the header row)
        const data = [];        // Initialize an array to store the parsed data
        for (let i = 1; i < rows.length; i++) {
            const rowData = rows[i].split(',');          // Use the regular expression to split the row while handling '\r'
            const rowObject = {};
            for (let j = 0; j < headers.length; j++) {
                rowObject[headers[j]] = rowData[j];
            }
            data.push(rowObject);
        }
        return data;
    }

    return (
        <section className="flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          <h1 className='text-4xl font-semibold mb-4 pt-4 pb-4'>Calendar competiții 2024</h1>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell align="right">Competiție</TableCell>
              <TableCell align="right">Distanța (km)</TableCell>
              <TableCell align="right">Diferența de nivel (m)</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Timp</TableCell>
              <TableCell align="right">General</TableCell>
              <TableCell align="right">Categorie de vârstă</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {csvData.map((race, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {race.date}
                </TableCell>
                <TableCell align="right" >
                    <a href={race.link} target="_blank" className="underline hover:text-success duration-200 transition-colors">{race.name}</a>
                    </TableCell>
                <TableCell align="right">{race.distance}</TableCell>
                <TableCell align="right">{race.elevationGain}</TableCell>
                <TableCell align="right">{race.status ? race.status : '-'}</TableCell>
                <TableCell align="right">{race.time ? race.time : '-'}</TableCell>
                <TableCell align="right">{race.generalPlace ? race.generalPlace : '-'}</TableCell>
                <TableCell align="right">{race.categoryPlace ? race.categoryPlace : '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </section>
    )
}