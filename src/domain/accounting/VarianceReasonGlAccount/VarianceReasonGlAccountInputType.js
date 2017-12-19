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

const VarianceReasonGlAccountInputType = new GraphQLInputObjectType({
  name: 'VarianceReasonGlAccountInputType',
  description: 'input type for VarianceReasonGlAccount',

  fields: () => ({
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    varianceReasonId: {type: GraphQLString}
  })
});

export {VarianceReasonGlAccountInputType};
    