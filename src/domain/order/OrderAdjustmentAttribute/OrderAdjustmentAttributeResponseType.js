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

const OrderAdjustmentAttributeResponseType = new GraphQLObjectType({
  name: 'OrderAdjustmentAttributeResponseType',
  description: 'response type for OrderAdjustmentAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    orderAdjustmentId: {type: GraphQLString}
  })
});

export {OrderAdjustmentAttributeResponseType};
    