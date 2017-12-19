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

const ProdCatalogCategoryInputType = new GraphQLInputObjectType({
  name: 'ProdCatalogCategoryInputType',
  description: 'input type for ProdCatalogCategory',

  fields: () => ({
    fromDate: {type: GraphQLString},
    prodCatalogCategoryTypeId: {type: GraphQLString},
    prodCatalogId: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProdCatalogCategoryInputType};
    