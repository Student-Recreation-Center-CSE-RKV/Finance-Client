import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, TextField, Paper, CircularProgress, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import "../AddedDues.css";

const AddedDues = () => {
  const [dues, setDues] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image

  useEffect(() => {
    const fetchDues = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3001/api/v1/getAllAddedDues');
        setDues(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchDues();
  }, []);

  // Handle Pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handle Search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle Image Click (Open Dialog)
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  // Handle Dialog Close
  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  // Filter the dues list based on search term
  const filteredDues = dues.filter(
    (due) =>
      due.dueNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      due.addedToID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      due.feeType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}> {/* Added padding */}
      <h2 className="heading">See All Added Dues</h2>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={handleSearch}
        value={searchTerm}
        placeholder="Search by due number, addedToID, or fee type"
      />

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Due Number</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Amount</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Fee Type</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Added To ID</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Added On</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Image</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredDues
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((due) => (
                    <TableRow key={due._id} style={{ fontWeight: 'bold' }}> {/* Bold rows */}
                      <TableCell>{due.dueNumber}</TableCell>
                      <TableCell>{due.amount}</TableCell>
                      <TableCell>{due.feeType}</TableCell>
                      <TableCell>{due.addedToID}</TableCell>
                      <TableCell>{new Date(due.addedOn).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <img
                          src={due.image}
                          alt="Due"
                          style={{ width: '50px', height: '50px', cursor: 'pointer' }} 
                          onClick={() => handleImageClick(due.image)} // Handle image click
                        />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={filteredDues.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}

      {/* Dialog to show full-sized image */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Proof
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Due"
              style={{ width: '100%', height: 'auto' }} // Full-sized image
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddedDues;
