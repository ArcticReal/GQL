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

const OrderTermAttributeInputType = new GraphQLInputObjectType({
  name: 'OrderTermAttributeInputType',
  description: 'input type for OrderTermAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    termTypeId: {type: GraphQLString}
  })
});

export {OrderTermAttributeInputType};
    