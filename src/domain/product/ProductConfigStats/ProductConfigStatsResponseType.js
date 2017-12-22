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

const ProductConfigStatsResponseType = new GraphQLObjectType({
  name: 'ProductConfigStatsResponseType',
  description: 'response type for ProductConfigStats',

  fields: () => ({
    configId: {type: GraphQLString},
    configTypeId: {type: GraphQLString},
    numOfConfs: {type: GraphQLInt},
    productId: {type: GraphQLString}
  })
});

export {ProductConfigStatsResponseType};
    