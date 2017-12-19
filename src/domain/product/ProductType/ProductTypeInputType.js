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

const ProductTypeInputType = new GraphQLInputObjectType({
  name: 'ProductTypeInputType',
  description: 'input type for ProductType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    isDigital: {type: GraphQLBoolean},
    isPhysical: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    productTypeId: {type: GraphQLString}
  })
});

export {ProductTypeInputType};
    