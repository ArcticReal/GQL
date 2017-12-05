
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
import {ProductStoreGroup} from '../product/ProductStoreGroup.js';


const ProductStoreGroup = new GraphQLObjectType({
  name: 'ProductStoreGroupType',
  description: 'Type for ProductStoreGroup in product',

  fields: () => ({
    productStoreGroupType: {
      type: ProductStoreGroupTypeType,
      args : {productStoreGroupTypeId: {type: GraphQLString}},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbizArray.load(`productStoreGroupTypes/find?=${args.productStoreGroupTypeId}`)
    },
    primaryParentGroup: {
      type: ProductStoreGroupType,
      args : {primaryParentGroupId: {type: GraphQLString}},
      resolve: (productStoreGroup, args, {loaders}) => loaders.ofbizArray.load(`productStoreGroups/find?productStoreGroupId=${args.primaryParentGroupId}`)
    },
    productStoreGroupName: {type: GraphQLString},
    description: {type: GraphQLString},
    productStoreGroupId: {type: GraphQLString}
  })
});

export {ProductStoreGroup};
    