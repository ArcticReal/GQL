
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


const ProductStoreGroupTypeType = new GraphQLObjectType({
  name: 'ProductStoreGroupTypeType',
  description: 'Type for ProductStoreGroupType in product',

  fields: () => ({
    productStoreGroupTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    productStoreGroups: {
      type: new GraphQLList(ProductStoreGroupType),
      args : {productStoreGroupTypeId: {type: GraphQLString}},
      resolve: (productStoreGroupType, args, {loaders}) => loaders.ofbizArray.load(`productStoreGroups/find?productStoreGroupTypeId=${productStoreGroupType.productStoreGroupTypeId}`)
    }
  })
});

export {ProductStoreGroupTypeType};
    




const ProductStoreGroupTypeInputType = new GraphQLInputObjectType({
  name: 'ProductStoreGroupTypeInputType',
  description: 'input type for ProductStoreGroupType in product',

  fields: () => ({
    productStoreGroupTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ProductStoreGroupTypeInputType};
    