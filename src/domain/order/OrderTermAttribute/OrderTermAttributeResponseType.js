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

const OrderTermAttributeResponseType = new GraphQLObjectType({
  name: 'OrderTermAttributeResponseType',
  description: 'response type for OrderTermAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    termTypeId: {type: GraphQLString}
  })
});

export {OrderTermAttributeResponseType};
    