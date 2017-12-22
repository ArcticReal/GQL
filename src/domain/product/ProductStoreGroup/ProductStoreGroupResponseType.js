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

const ProductStoreGroupResponseType = new GraphQLObjectType({
  name: 'ProductStoreGroupResponseType',
  description: 'response type for ProductStoreGroup',

  fields: () => ({
    description: {type: GraphQLString},
    primaryParentGroupId: {type: GraphQLString},
    productStoreGroupId: {type: GraphQLString},
    productStoreGroupName: {type: GraphQLString},
    productStoreGroupTypeId: {type: GraphQLString}
  })
});

export {ProductStoreGroupResponseType};
    