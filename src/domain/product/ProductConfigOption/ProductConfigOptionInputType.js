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

const ProductConfigOptionInputType = new GraphQLInputObjectType({
  name: 'ProductConfigOptionInputType',
  description: 'input type for ProductConfigOption',

  fields: () => ({
    configItemId: {type: GraphQLString},
    configOptionId: {type: GraphQLString},
    configOptionName: {type: GraphQLString},
    description: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt}
  })
});

export {ProductConfigOptionInputType};
    