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

const ProductConfigProductResponseType = new GraphQLObjectType({
  name: 'ProductConfigProductResponseType',
  description: 'response type for ProductConfigProduct',

  fields: () => ({
    configItemId: {type: GraphQLString},
    configOptionId: {type: GraphQLString},
    productId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    sequenceNum: {type: GraphQLInt}
  })
});

export {ProductConfigProductResponseType};
    