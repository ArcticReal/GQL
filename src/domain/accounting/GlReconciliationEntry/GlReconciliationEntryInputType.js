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

const GlReconciliationEntryInputType = new GraphQLInputObjectType({
  name: 'GlReconciliationEntryInputType',
  description: 'input type for GlReconciliationEntry',

  fields: () => ({
    acctgTransEntrySeqId: {type: GraphQLString},
    acctgTransId: {type: GraphQLString},
    glReconciliationId: {type: GraphQLString},
    reconciledAmount: {type: GraphQLFloat}
  })
});

export {GlReconciliationEntryInputType};
    