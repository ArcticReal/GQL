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

const ItemIssuanceRoleInputType = new GraphQLInputObjectType({
  name: 'ItemIssuanceRoleInputType',
  description: 'input type for ItemIssuanceRole',

  fields: () => ({
    itemIssuanceId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {ItemIssuanceRoleInputType};
    