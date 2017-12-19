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

const CustRequestItemWorkEffortInputType = new GraphQLInputObjectType({
  name: 'CustRequestItemWorkEffortInputType',
  description: 'input type for CustRequestItemWorkEffort',

  fields: () => ({
    custRequestId: {type: GraphQLString},
    custRequestItemSeqId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {CustRequestItemWorkEffortInputType};
    