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

const ProductConfigInputType = new GraphQLInputObjectType({
  name: 'ProductConfigInputType',
  description: 'input type for ProductConfig',

  fields: () => ({
    configItemId: {type: GraphQLString},
    configTypeId: {type: GraphQLString},
    defaultConfigOptionId: {type: GraphQLString},
    description: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    isMandatory: {type: GraphQLBoolean},
    longDescription: {type: GraphQLString},
    productId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductConfigInputType};
    