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

const ProductAttributeInputType = new GraphQLInputObjectType({
  name: 'ProductAttributeInputType',
  description: 'input type for ProductAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrType: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    productId: {type: GraphQLString}
  })
});

export {ProductAttributeInputType};
    