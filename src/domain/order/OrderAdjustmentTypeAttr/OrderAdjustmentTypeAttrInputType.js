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

const OrderAdjustmentTypeAttrInputType = new GraphQLInputObjectType({
  name: 'OrderAdjustmentTypeAttrInputType',
  description: 'input type for OrderAdjustmentTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    orderAdjustmentTypeId: {type: GraphQLString}
  })
});

export {OrderAdjustmentTypeAttrInputType};
    