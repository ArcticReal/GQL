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

const OrderProductPromoCodeResponseType = new GraphQLObjectType({
  name: 'OrderProductPromoCodeResponseType',
  description: 'response type for OrderProductPromoCode',

  fields: () => ({
    orderId: {type: GraphQLString},
    productPromoCodeId: {type: GraphQLString}
  })
});

export {OrderProductPromoCodeResponseType};
    