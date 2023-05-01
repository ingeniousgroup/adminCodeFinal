// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// // import { makeStyles } from '@mui/material/s';
// import { makeStyles } from '@mui/material';
// import axios from 'axios';
// import { useEffect,useState } from 'react';
// const useStyles = makeStyles((theme)=>{
//     tableContainer:{
//     marginTop:20
//  }
// })
// export default function AccessibleTable() {
//     const [owner, setOwner] = useState("owner");
//     const [ownerList, setOwnerList] = useState([]);
//     const loadOwner = async () => {
//         try {
//             let res = await axios.post("/admin/view_owners", { role: owner });
//             console.log(res.data.ownerList);
//             setOwnerList(res.data.ownerList);
//         }
//         catch (error) {
//             console.log(error);
//         }
//     }
//     useEffect(() => {
//         loadOwner();
//     }, []);

//     const classes = useStyles();  
//   return (
//     <TableContainer component={Paper}  classes={{paper:classes.tableContainer}}>
    
//       <Table sx={{ minWidth: 650 }} aria-label="caption table">
//         <caption>A basic table example with a caption</caption>
//         <TableHead>
//           <TableRow>
//             <TableCell>S.No</TableCell>
//             <TableCell align="right">Name</TableCell>
//             <TableCell align="right">Email</TableCell>
//             <TableCell align="right">Contact</TableCell>
//             <TableCell align="right">Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {ownerList.map((row,index) => (
//             <TableRow key={ownerList.name}>
//               <TableCell component="th" scope="row">
//                 {index+1}
//               </TableCell>
//               <TableCell align="right">{row.name}</TableCell>
//               <TableCell align="right">{row.email}</TableCell>
//               <TableCell align="right">{row.contact}</TableCell>
//               <button>Action</button>
//             </TableRow> 
//            ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }