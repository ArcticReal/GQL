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

const GlAccountOrganizationResponseType = new GraphQLObjectType({
  name: 'GlAccountOrganizationResponseType',
  description: 'response type for GlAccountOrganization',

  fields: () => ({
    fromDate: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {GlAccountOrganizationResponseType};
    