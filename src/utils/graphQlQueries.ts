const HOMEPAGE_QUERY = `query HomePage($limit: IntType, $skip: IntType, $orderBy: [ProductModelOrderBy], $filter: ProductModelFilter) {
    allProducts(first: $limit, skip: $skip, orderBy: $orderBy, filter: $filter) {
        id
            name
        summary
        image {
          id
          url
        }
        rating
        price
        quantityavailable
      }
    
      _allProductsMeta(filter: $filter) {
        count
      }
  }`;

export { HOMEPAGE_QUERY };
