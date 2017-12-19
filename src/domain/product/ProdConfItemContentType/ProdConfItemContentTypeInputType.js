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

const ProdConfItemContentTypeInputType = new GraphQLInputObjectType({
  name: 'ProdConfItemContentTypeInputType',
  description: 'input type for ProdConfItemContentType',

  fields: () => ({
    confItemContentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {ProdConfItemContentTypeInputType};
    