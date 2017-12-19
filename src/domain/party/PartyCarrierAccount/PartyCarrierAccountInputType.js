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

const PartyCarrierAccountInputType = new GraphQLInputObjectType({
  name: 'PartyCarrierAccountInputType',
  description: 'input type for PartyCarrierAccount',

  fields: () => ({
    accountNumber: {type: GraphQLString},
    carrierPartyId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyCarrierAccountInputType};
    