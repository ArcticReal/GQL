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

const CustRequestItemResponseType = new GraphQLObjectType({
  name: 'CustRequestItemResponseType',
  description: 'response type for CustRequestItem',

  fields: () => ({
    configId: {type: GraphQLString},
    custRequestId: {type: GraphQLString},
    custRequestItemSeqId: {type: GraphQLString},
    custRequestResolutionId: {type: GraphQLString},
    description: {type: GraphQLString},
    maximumAmount: {type: GraphQLFloat},
    priority: {type: GraphQLInt},
    productId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    requiredByDate: {type: GraphQLString},
    reservLength: {type: GraphQLFloat},
    reservPersons: {type: GraphQLFloat},
    reservStart: {type: GraphQLString},
    selectedAmount: {type: GraphQLFloat},
    sequenceNum: {type: GraphQLInt},
    statusId: {type: GraphQLString},
    story: {type: GraphQLString}
  })
});

export {CustRequestItemResponseType};
    