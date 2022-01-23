import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';

import { formatNumber } from "../../utils/index";
import { format } from 'path';
import ExchangeCard from '../FarmsComponents/ExchangeCard';
import { useWeb3React } from '@web3-react/core';




function CollapsingRow(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const { account, active, chainId, library } = useWeb3React();

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>

        <TableCell component="th" scope="row">
          {row.pair}
        </TableCell>
        <TableCell align="right"><img className='farm-icon' src={row.icon} /></TableCell>
        <TableCell align="right">{row.farm}</TableCell>
        <TableCell align="right">{row.earned}</TableCell>
        <TableCell align="right">{row.apr}</TableCell>
        <TableCell align="right">{formatNumber(row.liquidity)}</TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      {
        account && active ? <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <ExchangeCard data={row} />
            </Collapse>
          </TableCell>
        </TableRow> :

          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <ExchangeCard data={"connect"} />
              </Collapse>
            </TableCell>
          </TableRow>
      }
    </React.Fragment>
  );
}

export default CollapsingRow;