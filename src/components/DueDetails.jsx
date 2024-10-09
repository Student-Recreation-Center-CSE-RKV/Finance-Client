import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";

export default function DueDetails({ data }) {
    const location = useLocation();

    return (
        <>
            {/* Tuition Fee Section */}
            {data?.tutionFee && (
                <TableContainer
                    component={Paper}
                    sx={{
                        width: "68%",
                        margin: "auto",
                        marginTop: "1rem",
                        marginBottom: "3rem",
                    }}
                >
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{ marginTop: "1rem", marginBottom: "1rem", fontWeight: "bold" }}
                    >
                        Student Tuition Fee Record
                    </Typography>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#000' }}>
                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', color: '#fff' }}>
                                    Fee Type
                                </TableCell>
                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', color: '#fff' }}>
                                    Receipt No.
                                </TableCell>
                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', color: '#fff' }}>
                                    Date
                                </TableCell>
                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', color: '#fff' }}>
                                    Amount
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.tutionFee.admissionFee?.length > 0 && (
                                <TableRow>
                                    <TableCell align="center">Admission Fee</TableCell>
                                    <TableCell align="center">{data.tutionFee.admissionFee[0].ReceiptNo}</TableCell>
                                    <TableCell align="center">{data.tutionFee.admissionFee[0].Date}</TableCell>
                                    <TableCell align="center">{data.tutionFee.admissionFee[0].Amount}</TableCell>
                                </TableRow>
                            )}
                            {data.tutionFee.reAdmissionFee?.length > 0 && (
                                <TableRow>
                                    <TableCell align="center">Re-Admission Fee</TableCell>
                                    <TableCell align="center">{data.tutionFee.reAdmissionFee[0].ReceiptNo}</TableCell>
                                    <TableCell align="center">{data.tutionFee.reAdmissionFee[0].Date}</TableCell>
                                    <TableCell align="center">{data.tutionFee.reAdmissionFee[0].Amount}</TableCell>
                                </TableRow>
                            )}
                            {data.tutionFee.cautionDeposit?.length > 0 && (
                                <TableRow>
                                    <TableCell align="center">Caution Deposit</TableCell>
                                    <TableCell align="center">{data.tutionFee.cautionDeposit[0].ReceiptNo}</TableCell>
                                    <TableCell align="center">{data.tutionFee.cautionDeposit[0].Date}</TableCell>
                                    <TableCell align="center">{data.tutionFee.cautionDeposit[0].Amount}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            {/* Tuition Fee Installments Section */}
            {data?.tutionFee && (
                <TableContainer
                    component={Paper}
                    sx={{
                        width: "68%",
                        margin: "auto",
                        marginTop: "1rem",
                        marginBottom: "3rem",
                    }}
                >
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{ marginTop: "1rem", marginBottom: "1rem", fontWeight: "bold" }}
                    >
                        Tuition Fee - Installments
                    </Typography>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#000" }}>
                                <TableCell sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}>
                                    Receipt No.
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}>
                                    Amount
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}>
                                    Date
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.tutionFee.installments?.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center">{item.ReceiptNo}</TableCell>
                                    <TableCell align="center">{item.Amount}</TableCell>
                                    <TableCell align="center">{item.Date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            {/* Hostel Fee Section */}
            {data?.hostelFee && (
                <TableContainer
                    component={Paper}
                    sx={{
                        width: "68%",
                        margin: "auto",
                        marginTop: "1rem",
                        marginBottom: "3rem",
                    }}
                >
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{ marginTop: "1rem", marginBottom: "1rem", fontWeight: "bold" }}
                    >
                        Hostel Fee - Installments
                    </Typography>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#000" }}>
                                <TableCell sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}>
                                    Receipt No.
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}>
                                    Amount
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}>
                                    Date
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.hostelFee.installments?.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center">{item.ReceiptNo}</TableCell>
                                    <TableCell align="center">{item.Amount}</TableCell>
                                    <TableCell align="center">{item.Date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}


            {/* Other Fee Section */}
            {data?.otherFee && (
                <TableContainer
                    component={Paper}
                    sx={{
                        width: "68%",
                        margin: "auto",
                        marginTop: "1rem",
                        marginBottom: "3rem",
                    }}
                >
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{ marginTop: "1rem", marginBottom: "1rem", fontWeight: "bold" }}
                    >
                        Other Fees - Installments
                    </Typography>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#000" }}>
                                <TableCell sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}>
                                    Receipt No.
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}>
                                    Amount
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}>
                                    Date
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}>
                                    Category
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.otherFee.installments && data.otherFee.installments?.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center">{item.ReceiptNo}</TableCell>
                                    <TableCell align="center">{item.Amount}</TableCell>
                                    <TableCell align="center">{item.Date}</TableCell>
                                    <TableCell align="center">{item.category}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

        </>
    );
}
