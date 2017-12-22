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

const VarianceReasonGlAccountResponseType = new GraphQLObjectType({
  name: 'VarianceReasonGlAccountResponseType',
  description: 'response type for VarianceReasonGlAccount',

  fields: () => ({
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    varianceReasonId: {type: GraphQLString}
  })
});

export {VarianceReasonGlAccountResponseType};
    