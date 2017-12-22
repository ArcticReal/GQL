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

const ReturnStatusResponseType = new GraphQLObjectType({
  name: 'ReturnStatusResponseType',
  description: 'response type for ReturnStatus',

  fields: () => ({
    changeByUserLoginId: {type: GraphQLString},
    returnId: {type: GraphQLString},
    returnItemSeqId: {type: GraphQLString},
    returnStatusId: {type: GraphQLString},
    statusDatetime: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {ReturnStatusResponseType};
    