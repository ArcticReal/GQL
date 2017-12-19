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

const GlReconciliationInputType = new GraphQLInputObjectType({
  name: 'GlReconciliationInputType',
  description: 'input type for GlReconciliation',

  fields: () => ({
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    description: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    glReconciliationId: {type: GraphQLString},
    glReconciliationName: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    openingBalance: {type: GraphQLFloat},
    organizationPartyId: {type: GraphQLString},
    reconciledBalance: {type: GraphQLFloat},
    reconciledDate: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {GlReconciliationInputType};
    