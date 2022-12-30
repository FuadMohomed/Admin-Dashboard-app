import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './transaction.scss'



function Transaction() {
    const rows = [
     {
         id:1143955,
         product:'Patio',
         img:'https://images.unsplash.com/photo-1527359443443-84a48aec73d2?ixlib=rb-4.0.3&dl=randy-fath-csK5XPO87lI-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
         customer: 'John Doe',
         data: '1 March',
         amount:1500,
         method:'Cash on Delivery',
         status: 'Approved'
},
     {
         id:1143855,
         product:' Harry Potter Book',
         img:'https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-4.0.3&dl=shri-_qErPvf-IV4-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
         customer: 'John Smith',
         data: '1 March',
         amount:80,
         method:'Cash on Delivery',
         status: 'Approved'
},
     {
         id:1143255,
         product:'PlayStaion',
         img:'https://images.unsplash.com/photo-1617864064479-f203fc7897c0?ixlib=rb-4.0.3&dl=ben-iwara-tnfbre82_hc-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
         customer: 'Mikey Mike',
         data: '1 March',
         amount:900,
         method:'Online Payment',
         status: 'Pending'
},
     {
         id:1143155,
         product:'Beard Oil',
         img:'https://images.unsplash.com/photo-1627875777089-d32f1127e9ff?ixlib=rb-4.0.3&dl=castlebeard-co-0D6aORtbl-c-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
         customer: 'James Brown',
         data: '1 March',
         amount:60,
         method:'Cash on Delivery',
         status: 'Approved'
},
     {
         id:1143675,
         product:'Jordan 6s',
         img:'https://images.unsplash.com/photo-1643584549066-fc993fc9cb43?ixlib=rb-4.0.3&dl=derrick-payton-jHXyDTQgt0A-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
         customer: 'Micheal Brown',
         data: '1 March',
         amount:300,
         method:'Online Payment',
         status: 'Pending'
},
 ]   



  return (
<TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id} >
              <TableCell className='tableCell' > {row.id}</TableCell>
              <TableCell className='tableCell'>
                <div className="cellWrapper">
                  <img src={row.img} alt="pics" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'><span className={`status ${row.status}`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
  )
}

export default Transaction


 