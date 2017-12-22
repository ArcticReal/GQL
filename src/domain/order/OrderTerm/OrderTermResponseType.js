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

const OrderTermResponseType = new GraphQLObjectType({
  name: 'OrderTermResponseType',
  description: 'response type for OrderTerm',

  fields: () => ({
    description: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    termDays: {type: GraphQLInt},
    termTypeId: {type: GraphQLString},
    termValue: {type: GraphQLFloat},
    textValue: {type: GraphQLString},
    uomId: {type: GraphQLString}
  })
});

export {OrderTermResponseType};
    