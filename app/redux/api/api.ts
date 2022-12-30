import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import build from 'next/dist/build'

export const api = createApi({
	reducerPath: 'api/products',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/' }),
	endpoints: (build) => ({
		getProducts: build.query({
			query: (limit: 10) => `products?limit=${limit}`,
		}),
	}),
})
