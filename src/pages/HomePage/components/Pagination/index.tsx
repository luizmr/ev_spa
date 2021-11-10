import React from 'react';

// material-ui
import Pagination from '@mui/material/Pagination';

type Props = {
	page: number;
	handleChangePage: (event: any, value: number) => void;
	hidePrevButton: boolean;
	count: number;
};

const PaginationComponent = ({
	page,
	handleChangePage,
	hidePrevButton,
	count,
}: Props) => {
	return (
		<div className="pagination">
			<Pagination
				count={count}
				variant="outlined"
				page={page}
				onChange={handleChangePage}
				hidePrevButton={hidePrevButton}
			/>
		</div>
	);
};

export default PaginationComponent;
