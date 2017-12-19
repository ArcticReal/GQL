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

const PartyProfileDefaultInputType = new GraphQLInputObjectType({
  name: 'PartyProfileDefaultInputType',
  description: 'input type for PartyProfileDefault',

  fields: () => ({
    defaultBillAddr: {type: GraphQLString},
    defaultPayMeth: {type: GraphQLString},
    defaultShipAddr: {type: GraphQLString},
    defaultShipMeth: {type: GraphQLString},
    partyId: {type: GraphQLString},
    productStoreId: {type: GraphQLString}
  })
});

export {PartyProfileDefaultInputType};
    