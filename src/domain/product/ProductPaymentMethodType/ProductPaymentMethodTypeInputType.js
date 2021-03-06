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

const ProductPaymentMethodTypeInputType = new GraphQLInputObjectType({
  name: 'ProductPaymentMethodTypeInputType',
  description: 'input type for ProductPaymentMethodType',

  fields: () => ({
    fromDate: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString},
    productId: {type: GraphQLString},
    productPricePurposeId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductPaymentMethodTypeInputType};
    