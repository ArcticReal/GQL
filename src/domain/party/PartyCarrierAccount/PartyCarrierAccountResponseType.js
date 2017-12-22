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

const PartyCarrierAccountResponseType = new GraphQLObjectType({
  name: 'PartyCarrierAccountResponseType',
  description: 'response type for PartyCarrierAccount',

  fields: () => ({
    accountNumber: {type: GraphQLString},
    carrierPartyId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyCarrierAccountResponseType};
    