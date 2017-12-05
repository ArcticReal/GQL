
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductStoreGroup} from '../product/ProductStoreGroup.js';
import {ProductStoreGroup} from '../product/ProductStoreGroup.js';


const ProductStoreGroupRollup = new GraphQLObjectType({
  name: 'ProductStoreGroupRollupType',
  description: 'Type for ProductStoreGroupRollup in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    parentGroup: {
      type: ProductStoreGroupType,
      args : {parentGroupId: {type: GraphQLString}},
      resolve: (productStoreGroupRollup, args, {loaders}) => loaders.ofbizArray.load(`productStoreGroups/find?productStoreGroupId=${args.parentGroupId}`)
    },
    productStoreGroup: {
      type: ProductStoreGroupType,
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (productStoreGroupRollup, args, {loaders}) => loaders.ofbizArray.load(`productStoreGroups/find?=${args.productStoreGroupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreGroupRollup};
    