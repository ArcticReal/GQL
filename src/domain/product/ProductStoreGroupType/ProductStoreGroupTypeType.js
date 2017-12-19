
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductStoreGroupType} from '../../product/ProductStoreGroup/ProductStoreGroupType.js';


const ProductStoreGroupTypeType = new GraphQLObjectType({
  name: 'ProductStoreGroupTypeType',
  description: 'Type for ProductStoreGroupType in product',

  fields: () => ({
    productStoreGroupTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    productStoreGroups: {
      type: new GraphQLList(ProductStoreGroupType),
      args : {},
      resolve: (productStoreGroupType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreGroups/find?productStoreGroupTypeId=${productStoreGroupType.productStoreGroupTypeId}`)
    }
  })
});

export {ProductStoreGroupTypeType};
    