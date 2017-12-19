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

const ProductCategoryTypeAttrInputType = new GraphQLInputObjectType({
  name: 'ProductCategoryTypeAttrInputType',
  description: 'input type for ProductCategoryTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    productCategoryTypeId: {type: GraphQLString}
  })
});

export {ProductCategoryTypeAttrInputType};
    