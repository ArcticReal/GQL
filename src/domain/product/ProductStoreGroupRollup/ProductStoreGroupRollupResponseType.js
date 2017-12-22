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

const ProductStoreGroupRollupResponseType = new GraphQLObjectType({
  name: 'ProductStoreGroupRollupResponseType',
  description: 'response type for ProductStoreGroupRollup',

  fields: () => ({
    fromDate: {type: GraphQLString},
    parentGroupId: {type: GraphQLString},
    productStoreGroupId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreGroupRollupResponseType};
    