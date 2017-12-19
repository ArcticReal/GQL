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

const ProductAverageCostTypeInputType = new GraphQLInputObjectType({
  name: 'ProductAverageCostTypeInputType',
  description: 'input type for ProductAverageCostType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    productAverageCostTypeId: {type: GraphQLString}
  })
});

export {ProductAverageCostTypeInputType};
    