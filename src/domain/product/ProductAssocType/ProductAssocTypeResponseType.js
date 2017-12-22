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

const ProductAssocTypeResponseType = new GraphQLObjectType({
  name: 'ProductAssocTypeResponseType',
  description: 'response type for ProductAssocType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    productAssocTypeId: {type: GraphQLString}
  })
});

export {ProductAssocTypeResponseType};
    