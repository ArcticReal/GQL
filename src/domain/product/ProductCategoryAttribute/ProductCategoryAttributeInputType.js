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

const ProductCategoryAttributeInputType = new GraphQLInputObjectType({
  name: 'ProductCategoryAttributeInputType',
  description: 'input type for ProductCategoryAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    productCategoryId: {type: GraphQLString}
  })
});

export {ProductCategoryAttributeInputType};
    