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

const CustRequestStatusResponseType = new GraphQLObjectType({
  name: 'CustRequestStatusResponseType',
  description: 'response type for CustRequestStatus',

  fields: () => ({
    changeByUserLoginId: {type: GraphQLString},
    custRequestId: {type: GraphQLString},
    custRequestItemSeqId: {type: GraphQLString},
    custRequestStatusId: {type: GraphQLString},
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {CustRequestStatusResponseType};
    