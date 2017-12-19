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

const ProductConfigStatsInputType = new GraphQLInputObjectType({
  name: 'ProductConfigStatsInputType',
  description: 'input type for ProductConfigStats',

  fields: () => ({
    configId: {type: GraphQLString},
    configTypeId: {type: GraphQLString},
    numOfConfs: {type: GraphQLInt},
    productId: {type: GraphQLString}
  })
});

export {ProductConfigStatsInputType};
    