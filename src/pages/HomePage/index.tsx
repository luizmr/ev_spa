import React, { useState, useEffect } from 'react';

// components
import PaginationComponent from './components/Pagination';
import ProductsList from './components/ProductsList';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import FilterDesktop from 'components/FilterDesktop';
import SortBySelect from './components/SortBySelect';
import FilterMobile from 'components/FilterMobile';
import SnackbarComponent from 'components/SnackbarComponent';

// models
import { GraphQlOutput } from 'models/graphQl';
import { Product } from 'models/product';

// utils
import { HOMEPAGE_QUERY } from 'utils/graphQlQueries';
import priceRangeObject from './utils/priceRangeObject';

const HomePage = () => {
	const [page, setPage] = useState<number>(1);
	const [hidePrevButton, setHidePrevButton] = useState<boolean>(true);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [products, setProducts] = useState<Array<Product>>([]);
	const [totalPages, setTotalPages] = useState<number>(0);
	const [orderBy, setOrderBy] = useState<string>('rating_DESC');
	const [priceRange, setPriceRange] = useState<{ gte: string; lte: string }>({
		gte: '',
		lte: '',
	});
	const [rating, setRating] = useState<string>('0');
	const [searchString, setSearchString] = useState<string>('');
	const PAGE_SIZE = 6;

	const handleChangePage = (event: any, value: number): void => {
		value === 1 ? setHidePrevButton(true) : setHidePrevButton(false);
		setPage(value);
		requestGraphQlSearch(searchString, priceRange, rating, value, true);
	};

	const handleSearch = (
		pattern: string = searchString,
		priceObject: { gte: string; lte: string } = priceRange,
		ratingValue: string = rating,
	) => {
		setSearchString(pattern);
		requestGraphQlSearch(pattern, priceObject, ratingValue);
	};

	const requestGraphQlSearch = (
		pattern: string,
		priceObject: { gte: string; lte: string },
		ratingValue: string,
		pageValue: number = page,
		pageChanged: boolean = false,
	) => {
		setLoading(true);
		fetch('https://graphql.datocms.com/', {
			credentials: 'omit',
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_KEY}`,
			},
			body: JSON.stringify({
				query: HOMEPAGE_QUERY,
				variables: {
					limit: PAGE_SIZE,
					skip: pageChanged ? PAGE_SIZE * (pageValue - 1) : 0,
					orderBy: [orderBy],
					filter: {
						price: priceRangeObject(priceObject),
						rating: { gte: ratingValue },
						summary: { matches: { pattern } },
					},
				},
			}),
			method: 'POST',
		})
			.then((res) => res.json())
			.then(({ data }) => {
				handleSuccess(data, pageChanged);
			})
			.catch((err) => {
				handleCatchError();
			});
	};

	const handleSuccess = (
		data: GraphQlOutput,
		pageChanged: boolean = false,
	) => {
		setProducts(data.allProducts);
		setTotalPages(Math.ceil(data._allProductsMeta.count / 6));
		setLoading(false);
		if (!pageChanged) {
			setPage(1);
			setHidePrevButton(true);
		}
	};

	const handleCatchError = () => {
		setProducts([]);
		setTotalPages(1);
		setPage(1);
		setLoading(false);
	};

	const handleClearFilter = () => {
		setPriceRange({ gte: '', lte: '' });
		setRating('0');
		handleSearch('', { gte: '', lte: '' }, '0');
	};

	const handleChangeOrderBy = (event: any) => {
		const {
			target: { value },
		} = event;
		setOrderBy(value);
	};

	const handleChangePriceRange = (obj: { gte: string; lte: string }) => {
		const newPriceRange = { ...obj };
		setPriceRange(newPriceRange);
	};

	useEffect(() => {
		handleSearch();
	}, [orderBy]);

	return (
		<>
			<div className="homepage">
				<Navbar handleSearch={handleSearch} />
				<FilterDesktop
					handleChangePriceRange={handleChangePriceRange}
					setRating={setRating}
					handleSearch={handleSearch}
					handleClearFilter={handleClearFilter}
				/>
				<SortBySelect
					setIsOpen={setIsOpen}
					handleChangeOrderBy={handleChangeOrderBy}
					orderBy={orderBy}
				/>
				<ProductsList products={products} loading={loading} />
				<PaginationComponent
					page={page}
					handleChangePage={handleChangePage}
					hidePrevButton={hidePrevButton}
					count={totalPages}
				/>
				<Footer />
			</div>
			<FilterMobile
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				handleChangePriceRange={handleChangePriceRange}
				setRating={setRating}
				handleSearch={handleSearch}
				handleClearFilter={handleClearFilter}
			/>
			<SnackbarComponent />
		</>
	);
};

export default HomePage;
