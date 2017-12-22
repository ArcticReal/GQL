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

const ItemIssuanceRoleResponseType = new GraphQLObjectType({
  name: 'ItemIssuanceRoleResponseType',
  description: 'response type for ItemIssuanceRole',

  fields: () => ({
    itemIssuanceId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {ItemIssuanceRoleResponseType};
    