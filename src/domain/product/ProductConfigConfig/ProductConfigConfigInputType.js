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

const ProductConfigConfigInputType = new GraphQLInputObjectType({
  name: 'ProductConfigConfigInputType',
  description: 'input type for ProductConfigConfig',

  fields: () => ({
    configId: {type: GraphQLString},
    configItemId: {type: GraphQLString},
    configOptionId: {type: GraphQLString},
    description: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt}
  })
});

export {ProductConfigConfigInputType};
    