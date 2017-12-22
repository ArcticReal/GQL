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

const ProductCategoryAttributeResponseType = new GraphQLObjectType({
  name: 'ProductCategoryAttributeResponseType',
  description: 'response type for ProductCategoryAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    productCategoryId: {type: GraphQLString}
  })
});

export {ProductCategoryAttributeResponseType};
    