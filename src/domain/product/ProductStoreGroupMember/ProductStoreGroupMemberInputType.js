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

const ProductStoreGroupMemberInputType = new GraphQLInputObjectType({
  name: 'ProductStoreGroupMemberInputType',
  description: 'input type for ProductStoreGroupMember',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productStoreGroupId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreGroupMemberInputType};
    