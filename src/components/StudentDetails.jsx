import React from 'react';
import PropTypes from 'prop-types';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material';

export default function StudentDetails({ data }) {
	return (
		<TableContainer
			component={Paper}
			sx={{ width: '68%', margin: 'auto', marginTop: '1rem' }}
		>
			<Table>
				<TableHead>
					<TableRow sx={{ backgroundColor: '#000' }}>
						<TableCell
							align="center"
							sx={{ fontWeight: 'bold', textAlign: 'center', color: '#fff' }}
						>
							Student
						</TableCell>
						<TableCell
							align="center"
							sx={{ fontWeight: 'bold', textAlign: 'center', color: '#fff' }}
						>
							Batch
						</TableCell>
						<TableCell
							align="center"
							sx={{ fontWeight: 'bold', textAlign: 'center', color: '#fff' }}
						>
							Father&apos;s Name
						</TableCell>
						<TableCell
							align="center"
							sx={{ fontWeight: 'bold', textAlign: 'center', color: '#fff' }}
						>
							Gender
						</TableCell>
						<TableCell
							align="center"
							sx={{ fontWeight: 'bold', textAlign: 'center', color: '#fff' }}
						>
							Category
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell align="center">{data.StudentName}</TableCell>
						<TableCell align="center">{data.BATCH}</TableCell>
						<TableCell align="center">{data.FatherName}</TableCell>
						<TableCell align="center">{data.Gender}</TableCell>
						<TableCell align="center">{data.Category}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}

StudentDetails.propTypes = {
	data: PropTypes.shape({
		StudentName: PropTypes.string.isRequired,
		BATCH: PropTypes.string.isRequired,
		FatherName: PropTypes.string.isRequired,
		Gender: PropTypes.string.isRequired,
		Category: PropTypes.string.isRequired,
	}).isRequired,
};
