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

const ProductCategoryTypeAttrResponseType = new GraphQLObjectType({
  name: 'ProductCategoryTypeAttrResponseType',
  description: 'response type for ProductCategoryTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    productCategoryTypeId: {type: GraphQLString}
  })
});

export {ProductCategoryTypeAttrResponseType};
    