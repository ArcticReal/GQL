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

const ProductTypeResponseType = new GraphQLObjectType({
  name: 'ProductTypeResponseType',
  description: 'response type for ProductType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    isDigital: {type: GraphQLBoolean},
    isPhysical: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    productTypeId: {type: GraphQLString}
  })
});

export {ProductTypeResponseType};
    