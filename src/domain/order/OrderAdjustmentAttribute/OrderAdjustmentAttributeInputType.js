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

const OrderAdjustmentAttributeInputType = new GraphQLInputObjectType({
  name: 'OrderAdjustmentAttributeInputType',
  description: 'input type for OrderAdjustmentAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    orderAdjustmentId: {type: GraphQLString}
  })
});

export {OrderAdjustmentAttributeInputType};
    