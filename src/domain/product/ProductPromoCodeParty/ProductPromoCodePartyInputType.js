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

const ProductPromoCodePartyInputType = new GraphQLInputObjectType({
  name: 'ProductPromoCodePartyInputType',
  description: 'input type for ProductPromoCodeParty',

  fields: () => ({
    partyId: {type: GraphQLString},
    productPromoCodeId: {type: GraphQLString}
  })
});

export {ProductPromoCodePartyInputType};
    