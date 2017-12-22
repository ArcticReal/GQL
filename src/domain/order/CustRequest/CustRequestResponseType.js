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

const CustRequestResponseType = new GraphQLObjectType({
  name: 'CustRequestResponseType',
  description: 'response type for CustRequest',

  fields: () => ({
    closedDateTime: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    custRequestCategoryId: {type: GraphQLString},
    custRequestDate: {type: GraphQLString},
    custRequestId: {type: GraphQLString},
    custRequestName: {type: GraphQLString},
    custRequestTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    fromPartyId: {type: GraphQLString},
    fulfillContactMechId: {type: GraphQLString},
    internalComment: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    maximumAmountUomId: {type: GraphQLString},
    openDateTime: {type: GraphQLString},
    priority: {type: GraphQLInt},
    productStoreId: {type: GraphQLString},
    reason: {type: GraphQLString},
    responseRequiredDate: {type: GraphQLString},
    salesChannelEnumId: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {CustRequestResponseType};
    