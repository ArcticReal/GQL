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

const ProductAssocTypeInputType = new GraphQLInputObjectType({
  name: 'ProductAssocTypeInputType',
  description: 'input type for ProductAssocType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    productAssocTypeId: {type: GraphQLString}
  })
});

export {ProductAssocTypeInputType};
    