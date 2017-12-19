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

const ReturnHeaderInputType = new GraphQLInputObjectType({
  name: 'ReturnHeaderInputType',
  description: 'input type for ReturnHeader',

  fields: () => ({
    billingAccountId: {type: GraphQLString},
    createdBy: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    destinationFacilityId: {type: GraphQLString},
    entryDate: {type: GraphQLString},
    finAccountId: {type: GraphQLString},
    fromPartyId: {type: GraphQLString},
    needsInventoryReceive: {type: GraphQLBoolean},
    originContactMechId: {type: GraphQLString},
    paymentMethodId: {type: GraphQLString},
    returnHeaderTypeId: {type: GraphQLString},
    returnId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    supplierRmaId: {type: GraphQLString},
    toPartyId: {type: GraphQLString}
  })
});

export {ReturnHeaderInputType};
    