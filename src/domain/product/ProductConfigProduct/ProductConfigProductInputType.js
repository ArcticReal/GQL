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

const ProductConfigProductInputType = new GraphQLInputObjectType({
  name: 'ProductConfigProductInputType',
  description: 'input type for ProductConfigProduct',

  fields: () => ({
    configItemId: {type: GraphQLString},
    configOptionId: {type: GraphQLString},
    productId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    sequenceNum: {type: GraphQLInt}
  })
});

export {ProductConfigProductInputType};
    