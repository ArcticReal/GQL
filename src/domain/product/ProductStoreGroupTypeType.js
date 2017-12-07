
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductStoreGroupType} from '../product/ProductStoreGroupType.js';


const ProductStoreGroupTypeType = new GraphQLObjectType({
  name: 'ProductStoreGroupTypeType',
  description: 'Type for ProductStoreGroupType in product',

  fields: () => ({
    productStoreGroupTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    productStoreGroup: {
      type: new GraphQLList(ProductStoreGroupType),
      args : {productStoreGroupTypeId: {type: GraphQLString}},
      resolve: (productStoreGroupType, args, {loaders}) => loaders.ofbizArray.load(`productStoreGroups/find?productStoreGroupTypeId=${productStoreGroupType.productStoreGroupTypeId}`)
    }
  })
});

export {ProductStoreGroupTypeType};
    