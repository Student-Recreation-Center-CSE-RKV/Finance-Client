import * as React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbar({ open, onClose, message }) {
	return (
		<div>
			<Snackbar open={open} autoHideDuration={5000} onClose={onClose}>
				<Alert
					onClose={onClose}
					severity={message.type}
					variant="filled"
					sx={{ width: '100%' }}
				>
					{message.msg}
				</Alert>
			</Snackbar>
		</div>
	);
}

CustomizedSnackbar.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	message: PropTypes.object.isRequired,
};
