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

const PartyProfileDefaultResponseType = new GraphQLObjectType({
  name: 'PartyProfileDefaultResponseType',
  description: 'response type for PartyProfileDefault',

  fields: () => ({
    defaultBillAddr: {type: GraphQLString},
    defaultPayMeth: {type: GraphQLString},
    defaultShipAddr: {type: GraphQLString},
    defaultShipMeth: {type: GraphQLString},
    partyId: {type: GraphQLString},
    productStoreId: {type: GraphQLString}
  })
});

export {PartyProfileDefaultResponseType};
    