
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductCategoryType} from '../product/ProductCategoryType.js';


const ProductCategoryType = new GraphQLObjectType({
  name: 'ProductCategoryTypeType',
  description: 'Type for ProductCategoryType in product',

  fields: () => ({
    productCategoryTypeId: {type: GraphQLString},
    parentType: {
      type: ProductCategoryTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productCategoryType, args, {loaders}) => loaders.ofbizArray.load(`productCategoryTypes/find?productCategoryTypeId=${args.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {ProductCategoryType};
    