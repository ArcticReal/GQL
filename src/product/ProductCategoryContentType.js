
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductCategoryContentType} from '../product/ProductCategoryContentType.js';
import {ProductCategory} from '../product/ProductCategory.js';
import {Content} from '../product/Content.js';


const ProductCategoryContent = new GraphQLObjectType({
  name: 'ProductCategoryContentType',
  description: 'Type for ProductCategoryContent in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    prodCatContentType: {
      type: ProductCategoryContentTypeType,
      args : {prodCatContentTypeId: {type: GraphQLString}},
      resolve: (productCategoryContent, args, {loaders}) => loaders.ofbizArray.load(`productCategoryContentTypes/find?=${args.prodCatContentTypeId}`)
    },
    purchaseFromDate: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategoryContent, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find?=${args.productCategoryId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (productCategoryContent, args, {loaders}) => loaders.ofbizArray.load(`contents/find?=${args.contentId}`)
    },
    useDaysLimit: {type: GraphQLFloat},
    purchaseThruDate: {type: GraphQLString},
    useCountLimit: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductCategoryContent};
    