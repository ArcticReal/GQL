
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

import {ProductStoreGroupType} from '../product/ProductStoreGroup.js';


const ProductStoreGroupRollupType = new GraphQLObjectType({
  name: 'ProductStoreGroupRollupType',
  description: 'Type for ProductStoreGroupRollup in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    parentGroup: {
      type: ProductStoreGroupType,
      args : {parentGroupId: {type: GraphQLString}},
      resolve: (productStoreGroupRollup, args, {loaders}) => loaders.ofbiz.load(`product/product/productStoreGroups/find?productStoreGroupId=${productStoreGroupRollup.parentGroupId}`)
    },
    productStoreGroup: {
      type: ProductStoreGroupType,
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (productStoreGroupRollup, args, {loaders}) => loaders.ofbiz.load(`product/product/productStoreGroups/find?productStoreGroupId=${productStoreGroupRollup.productStoreGroupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreGroupRollupType};
    




const ProductStoreGroupRollupInputType = new GraphQLInputObjectType({
  name: 'ProductStoreGroupRollupInputType',
  description: 'input type for ProductStoreGroupRollup',

  fields: () => ({
    fromDate: {type: GraphQLString},
    parentGroupId: {type: GraphQLString},
    productStoreGroupId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreGroupRollupInputType};
    