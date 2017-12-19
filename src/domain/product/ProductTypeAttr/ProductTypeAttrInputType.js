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

const ProductTypeAttrInputType = new GraphQLInputObjectType({
  name: 'ProductTypeAttrInputType',
  description: 'input type for ProductTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    productTypeId: {type: GraphQLString}
  })
});

export {ProductTypeAttrInputType};
    