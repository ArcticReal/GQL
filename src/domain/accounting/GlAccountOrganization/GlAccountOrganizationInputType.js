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

const GlAccountOrganizationInputType = new GraphQLInputObjectType({
  name: 'GlAccountOrganizationInputType',
  description: 'input type for GlAccountOrganization',

  fields: () => ({
    fromDate: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {GlAccountOrganizationInputType};
    