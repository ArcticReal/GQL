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

const ProdCatalogCategoryTypeResponseType = new GraphQLObjectType({
  name: 'ProdCatalogCategoryTypeResponseType',
  description: 'response type for ProdCatalogCategoryType',

  fields: () => ({
    description: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    prodCatalogCategoryTypeId: {type: GraphQLString}
  })
});

export {ProdCatalogCategoryTypeResponseType};
    