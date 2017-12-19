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

const OrderItemTypeAttrInputType = new GraphQLInputObjectType({
  name: 'OrderItemTypeAttrInputType',
  description: 'input type for OrderItemTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    orderItemTypeId: {type: GraphQLString}
  })
});

export {OrderItemTypeAttrInputType};
    