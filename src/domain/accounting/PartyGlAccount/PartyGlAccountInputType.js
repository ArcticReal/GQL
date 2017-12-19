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

const PartyGlAccountInputType = new GraphQLInputObjectType({
  name: 'PartyGlAccountInputType',
  description: 'input type for PartyGlAccount',

  fields: () => ({
    glAccountId: {type: GraphQLString},
    glAccountTypeId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {PartyGlAccountInputType};
    