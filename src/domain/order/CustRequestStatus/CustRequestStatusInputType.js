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

const CustRequestStatusInputType = new GraphQLInputObjectType({
  name: 'CustRequestStatusInputType',
  description: 'input type for CustRequestStatus',

  fields: () => ({
    changeByUserLoginId: {type: GraphQLString},
    custRequestId: {type: GraphQLString},
    custRequestItemSeqId: {type: GraphQLString},
    custRequestStatusId: {type: GraphQLString},
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {CustRequestStatusInputType};
    