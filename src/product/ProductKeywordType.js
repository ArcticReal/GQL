
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Product} from '../product/Product.js';
import {StatusItem} from '../product/StatusItem.js';
import {Enumeration} from '../product/Enumeration.js';


const ProductKeyword = new GraphQLObjectType({
  name: 'ProductKeywordType',
  description: 'Type for ProductKeyword in product',

  fields: () => ({
    relevancyWeight: {type: GraphQLInt},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productKeyword, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    status: {
      type: StatusItemType,
      args : {statusId: {type: GraphQLString}},
      resolve: (productKeyword, args, {loaders}) => loaders.ofbizArray.load(`statusItems/find?=${args.statusId}`)
    },
    keywordType: {
      type: EnumerationType,
      args : {keywordTypeId: {type: GraphQLString}},
      resolve: (productKeyword, args, {loaders}) => loaders.ofbizArray.load(`enumerations/find?enumId=${args.keywordTypeId}`)
    },
    keyword: {type: GraphQLString}
  })
});

export {ProductKeyword};
    