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

const OrderContentInputType = new GraphQLInputObjectType({
  name: 'OrderContentInputType',
  description: 'input type for OrderContent',

  fields: () => ({
    contentId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    orderContentTypeId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {OrderContentInputType};
    