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

const GlAccountTypeDefaultResponseType = new GraphQLObjectType({
  name: 'GlAccountTypeDefaultResponseType',
  description: 'response type for GlAccountTypeDefault',

  fields: () => ({
    glAccountId: {type: GraphQLString},
    glAccountTypeId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString}
  })
});

export {GlAccountTypeDefaultResponseType};
    