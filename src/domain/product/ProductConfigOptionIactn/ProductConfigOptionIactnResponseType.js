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

const ProductConfigOptionIactnResponseType = new GraphQLObjectType({
  name: 'ProductConfigOptionIactnResponseType',
  description: 'response type for ProductConfigOptionIactn',

  fields: () => ({
    configIactnTypeId: {type: GraphQLString},
    configItemId: {type: GraphQLString},
    configItemIdTo: {type: GraphQLString},
    configOptionId: {type: GraphQLString},
    configOptionIdTo: {type: GraphQLString},
    description: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt}
  })
});

export {ProductConfigOptionIactnResponseType};
    