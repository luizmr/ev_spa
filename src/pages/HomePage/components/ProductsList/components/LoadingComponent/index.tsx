import React from 'react';

// material-ui
import CircularProgress from '@mui/material/CircularProgress';

const LoadingComponent = () => {
	return (
		<div className="loading-component">
			<CircularProgress size={200} />
		</div>
	);
};

export default LoadingComponent;
