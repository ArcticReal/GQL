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

const OrderProductPromoCodeInputType = new GraphQLInputObjectType({
  name: 'OrderProductPromoCodeInputType',
  description: 'input type for OrderProductPromoCode',

  fields: () => ({
    orderId: {type: GraphQLString},
    productPromoCodeId: {type: GraphQLString}
  })
});

export {OrderProductPromoCodeInputType};
    