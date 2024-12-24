import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TextField,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import "../AddedDues.css";

const headings = [
  "Due Number",
  "Amount",
  "Fee Type",
  "Added To ID",
  "Added On",
  "Image",
];

const AddedDues = () => {
  const [dues, setDues] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchDues = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:3001/api/v1/getAllAddedDues"
        );
        setDues(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchDues();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const filteredDues = dues.filter(
    (due) =>
      due.dueNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      due.addedToID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      due.feeType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Stack width="100%">
      <Typography variant="h5" textAlign={"center"} mt={5} mb={5}>
        See All Added Dues
      </Typography>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        onChange={handleSearch}
        value={searchTerm}
        placeholder="Search by due number, or fee type"
      />
      <Typography
        sx={{
          fontWeight: "bold",
          padding: "10px 0",
          textAlign: "right",
        }}
      >
        Click on image to see proof
      </Typography>

      {loading ? (
        <Stack alignItems={"center"}>
          <CircularProgress />
        </Stack>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {headings.map((item) => {
                    return (
                      <TableCell sx={{ fontWeight: "bold" }}>{item}</TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredDues
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((due) => (
                    <TableRow key={due._id} style={{ fontWeight: "bold" }}>
                      <TableCell>{due.dueNumber}</TableCell>
                      <TableCell>{due.amount}</TableCell>
                      <TableCell>{due.feeType}</TableCell>
                      <TableCell>{due.addedToID}</TableCell>
                      <TableCell>
                        {new Date(due.addedOn).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <img
                          src={due.image}
                          alt="Due"
                          style={{
                            width: "50px",
                            height: "50px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleImageClick(due.image)}
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
        </>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Proof
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
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
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Stack>
  );
};

export default AddedDues;
