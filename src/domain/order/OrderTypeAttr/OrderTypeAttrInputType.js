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

const OrderTypeAttrInputType = new GraphQLInputObjectType({
  name: 'OrderTypeAttrInputType',
  description: 'input type for OrderTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    orderTypeId: {type: GraphQLString}
  })
});

export {OrderTypeAttrInputType};
    