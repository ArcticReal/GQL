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

const ProductAverageCostTypeResponseType = new GraphQLObjectType({
  name: 'ProductAverageCostTypeResponseType',
  description: 'response type for ProductAverageCostType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    productAverageCostTypeId: {type: GraphQLString}
  })
});

export {ProductAverageCostTypeResponseType};
    