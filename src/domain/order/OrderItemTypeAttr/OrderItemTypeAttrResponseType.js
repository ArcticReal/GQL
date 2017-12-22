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

const OrderItemTypeAttrResponseType = new GraphQLObjectType({
  name: 'OrderItemTypeAttrResponseType',
  description: 'response type for OrderItemTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    orderItemTypeId: {type: GraphQLString}
  })
});

export {OrderItemTypeAttrResponseType};
    