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

const ProductConfigOptionIactnInputType = new GraphQLInputObjectType({
  name: 'ProductConfigOptionIactnInputType',
  description: 'input type for ProductConfigOptionIactn',

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

export {ProductConfigOptionIactnInputType};
    