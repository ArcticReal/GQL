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

const OrderTypeAttrResponseType = new GraphQLObjectType({
  name: 'OrderTypeAttrResponseType',
  description: 'response type for OrderTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    orderTypeId: {type: GraphQLString}
  })
});

export {OrderTypeAttrResponseType};
    