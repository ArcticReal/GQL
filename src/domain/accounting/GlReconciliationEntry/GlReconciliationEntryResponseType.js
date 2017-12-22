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

const GlReconciliationEntryResponseType = new GraphQLObjectType({
  name: 'GlReconciliationEntryResponseType',
  description: 'response type for GlReconciliationEntry',

  fields: () => ({
    acctgTransEntrySeqId: {type: GraphQLString},
    acctgTransId: {type: GraphQLString},
    glReconciliationId: {type: GraphQLString},
    reconciledAmount: {type: GraphQLFloat}
  })
});

export {GlReconciliationEntryResponseType};
    