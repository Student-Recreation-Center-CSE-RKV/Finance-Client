import React from 'react'
import PropTypes from 'prop-types'
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Paper,
	Typography,
} from '@mui/material'

export default function CustomizedGrid({ data }) {
	const id =
		data && data.ID
			? data.ID
			: data && data?.tutionFee && data?.tutionFee?.ID
				? data.tutionFee.ID
				: data && data?.hostelFee && data?.hostelFee?.ID
					? data.hostelFee.ID
					: data && data?.otherFee && data?.otherFee?.ID
						? data.otherFee.ID
						: ''
	return (
		<TableContainer
			component={Paper}
			sx={{ width: '68%', margin: 'auto', marginTop: '1rem' }}
		>
			<Table>
				<TableBody>
					<TableRow>
						<TableCell align="center">
							<Typography variant="h6">
								RKV ID No:{' '}
								<Typography component="span" fontWeight="bold" variant="h6">
									{id}
								</Typography>
							</Typography>
						</TableCell>
					</TableRow>
					l̥
				</TableBody>
			</Table>
		</TableContainer>
	)
}

CustomizedGrid.propTypes = {
	data: PropTypes.shape({
		ID: PropTypes.string,
		tutionFee: PropTypes.shape({
			ID: PropTypes.string,
		}),
		hostelFee: PropTypes.shape({
			ID: PropTypes.string,
		}),
		otherFee: PropTypes.shape({
			ID: PropTypes.string,
		}),
	}),
}
