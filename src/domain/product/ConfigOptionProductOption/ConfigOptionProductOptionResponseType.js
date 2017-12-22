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

const ConfigOptionProductOptionResponseType = new GraphQLObjectType({
  name: 'ConfigOptionProductOptionResponseType',
  description: 'response type for ConfigOptionProductOption',

  fields: () => ({
    configId: {type: GraphQLString},
    configItemId: {type: GraphQLString},
    configOptionId: {type: GraphQLString},
    description: {type: GraphQLString},
    productId: {type: GraphQLString},
    productOptionId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt}
  })
});

export {ConfigOptionProductOptionResponseType};
    