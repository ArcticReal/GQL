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

const ProdCatalogCategoryTypeInputType = new GraphQLInputObjectType({
  name: 'ProdCatalogCategoryTypeInputType',
  description: 'input type for ProdCatalogCategoryType',

  fields: () => ({
    description: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    prodCatalogCategoryTypeId: {type: GraphQLString}
  })
});

export {ProdCatalogCategoryTypeInputType};
    