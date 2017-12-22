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

const ProductStoreGroupMemberResponseType = new GraphQLObjectType({
  name: 'ProductStoreGroupMemberResponseType',
  description: 'response type for ProductStoreGroupMember',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productStoreGroupId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreGroupMemberResponseType};
    