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

const ProductPromoCodePartyResponseType = new GraphQLObjectType({
  name: 'ProductPromoCodePartyResponseType',
  description: 'response type for ProductPromoCodeParty',

  fields: () => ({
    partyId: {type: GraphQLString},
    productPromoCodeId: {type: GraphQLString}
  })
});

export {ProductPromoCodePartyResponseType};
    