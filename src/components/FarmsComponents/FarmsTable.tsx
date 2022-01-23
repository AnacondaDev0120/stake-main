import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CollapsingRow from '../GeneralComponents/CollapsingRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { makeStyles } from '@mui/styles';
import { TextField } from '@mui/material';


function FarmsTable(props: any) {

  const { rows } = props;

  const [filterValue, setFilterValue] = useState("");
  const [sortBy, setSortBy] = useState<any>("asc");
  const [filteredData, setFilteredData] = useState<any>([]);


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };




  let pageContent : any  = [];
  useEffect(() => {
    if (filterValue == "") {
      for(let i=page*rowsPerPage ; i<(page+1)*rowsPerPage; i++){
        pageContent.push(rows.i);
      }
      setFilteredData([...pageContent])
    }
    console.log("pagecontent"+pageContent);
  }, [props]);

  useEffect(() => {
    if (filterValue != "") {
      const filteredFarm: any = [];
      rows.map((item: any) => {
        let pairName = item.pair.toLowerCase();
        if (pairName.includes(filterValue.toLowerCase())) {
          filteredFarm.push(item);
        }
      })
      setFilteredData(filteredFarm)
    } else {
      setFilteredData(rows)
    }
  }, [filterValue]);

  const sortingbypair = () => {
    if (sortBy == "asc") {
      filteredData.sort((a: any, b: any) => (a.pair > b.pair) ? -1 : 1);
      setFilteredData([...filteredData]);
      setSortBy("dec");
    }
    else {
      filteredData.sort((a: any, b: any) => (a.pair > b.pair) ? 1 : -1);
      setFilteredData([...filteredData]);
      setSortBy("asc");
    }
  }

  const sortingbyprovider = () => {
    if (sortBy == "asc") {
      filteredData.sort((a: any, b: any) => (a.provider > b.provider) ? -1 : 1);
      setFilteredData([...filteredData]);
      setSortBy("dec");
    }
    else {
      filteredData.sort((a: any, b: any) => (a.provider > b.provider) ? 1 : -1);
      setFilteredData([...filteredData]);
      setSortBy("asc");
    }
  }
  const sortingbyapr = () => {
    if (sortBy == "asc") {
      filteredData.sort((a: any, b: any) => (a.apr > b.apr) ? -1 : 1);
      setFilteredData([...filteredData]);
      setSortBy("dec");
    }
    else {
      filteredData.sort((a: any, b: any) => (a.apr > b.apr) ? 1 : -1);
      setFilteredData([...filteredData]);
      setSortBy("asc");
    }
  }
  const sortingbyfarm = () => {
    if (sortBy == "asc") {
      filteredData.sort((a: any, b: any) => (a.farm > b.farm) ? -1 : 1);
      setFilteredData([...filteredData]);
      setSortBy("dec");
    }
    else {
      filteredData.sort((a: any, b: any) => (a.farm > b.farm) ? 1 : -1);
      setFilteredData([...filteredData]);
      setSortBy("asc");
    }
  }
  const sortingbyliquidity = () => {
    if (sortBy == "asc") {
      filteredData.sort((a: any, b: any) => (a.liquidity > b.liquidity) ? -1 : 1);
      setFilteredData([...filteredData]);
      setSortBy("dec");
    }
    else {
      filteredData.sort((a: any, b: any) => (a.liquidity > b.liquidity) ? 1 : -1);
      setFilteredData([...filteredData]);
      setSortBy("asc");
    }
  }

  const sortingbyearned = () => {
    if (sortBy == "asc") {
      filteredData.sort((a: any, b: any) => (a.earned > b.earned) ? -1 : 1);
      setFilteredData([...filteredData]);
      setSortBy("dec");
    }
    else {
      filteredData.sort((a: any, b: any) => (a.earned > b.earned) ? 1 : -1);
      setFilteredData([...filteredData]);
      setSortBy("asc");
    }
  }
  const html = (

    <>
      <TextField id="outlined-basic" style={{
        marginBottom: 15,
        borderColor: '#ffffff',
        color: '#ffffff'
      }} label="Search" variant="outlined" onChange={(e) => setFilterValue(e.target.value)} value={filterValue} />

      <TableContainer component={Paper}>
        <Table className="table-striped table-dark collapse-table" aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell onClick={() => sortingbypair()}>Pair</TableCell>
              <TableCell onClick={() => sortingbyprovider()} align="right">Provider</TableCell>
              <TableCell onClick={() => sortingbyfarm()} align="right">Farm</TableCell>
              <TableCell onClick={() => sortingbyearned()} align="right">Earned</TableCell>
              <TableCell onClick={() => sortingbyapr()} align="right">APR</TableCell>
              <TableCell onClick={() => sortingbyliquidity()} align="right">Liquidity</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row: any, i: any) => (
              <CollapsingRow key={filteredData.sort ? "B" + i : "A" + i} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br/>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>)

  return html;

}

export default FarmsTable;