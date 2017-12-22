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

const OrderItemPriceInfoResponseType = new GraphQLObjectType({
  name: 'OrderItemPriceInfoResponseType',
  description: 'response type for OrderItemPriceInfo',

  fields: () => ({
    description: {type: GraphQLString},
    modifyAmount: {type: GraphQLFloat},
    orderId: {type: GraphQLString},
    orderItemPriceInfoId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    productPriceActionSeqId: {type: GraphQLString},
    productPriceRuleId: {type: GraphQLString},
    rateCode: {type: GraphQLString}
  })
});

export {OrderItemPriceInfoResponseType};
    