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

const ConfigOptionProductOptionInputType = new GraphQLInputObjectType({
  name: 'ConfigOptionProductOptionInputType',
  description: 'input type for ConfigOptionProductOption',

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

export {ConfigOptionProductOptionInputType};
    