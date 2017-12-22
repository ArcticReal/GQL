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

const ProdCatalogCategoryResponseType = new GraphQLObjectType({
  name: 'ProdCatalogCategoryResponseType',
  description: 'response type for ProdCatalogCategory',

  fields: () => ({
    fromDate: {type: GraphQLString},
    prodCatalogCategoryTypeId: {type: GraphQLString},
    prodCatalogId: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProdCatalogCategoryResponseType};
    