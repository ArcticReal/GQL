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
    