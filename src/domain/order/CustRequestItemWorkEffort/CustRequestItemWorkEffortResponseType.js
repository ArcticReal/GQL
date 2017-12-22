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

const CustRequestItemWorkEffortResponseType = new GraphQLObjectType({
  name: 'CustRequestItemWorkEffortResponseType',
  description: 'response type for CustRequestItemWorkEffort',

  fields: () => ({
    custRequestId: {type: GraphQLString},
    custRequestItemSeqId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {CustRequestItemWorkEffortResponseType};
    