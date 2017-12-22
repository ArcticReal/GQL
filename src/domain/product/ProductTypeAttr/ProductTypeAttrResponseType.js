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

const ProductTypeAttrResponseType = new GraphQLObjectType({
  name: 'ProductTypeAttrResponseType',
  description: 'response type for ProductTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    productTypeId: {type: GraphQLString}
  })
});

export {ProductTypeAttrResponseType};
    