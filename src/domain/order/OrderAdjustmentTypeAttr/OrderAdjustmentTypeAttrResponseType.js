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

const OrderAdjustmentTypeAttrResponseType = new GraphQLObjectType({
  name: 'OrderAdjustmentTypeAttrResponseType',
  description: 'response type for OrderAdjustmentTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    orderAdjustmentTypeId: {type: GraphQLString}
  })
});

export {OrderAdjustmentTypeAttrResponseType};
    