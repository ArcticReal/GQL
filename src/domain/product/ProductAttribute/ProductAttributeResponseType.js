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

const ProductAttributeResponseType = new GraphQLObjectType({
  name: 'ProductAttributeResponseType',
  description: 'response type for ProductAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrType: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    productId: {type: GraphQLString}
  })
});

export {ProductAttributeResponseType};
    