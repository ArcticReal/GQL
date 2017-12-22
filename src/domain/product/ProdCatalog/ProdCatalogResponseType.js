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

const ProdCatalogResponseType = new GraphQLObjectType({
  name: 'ProdCatalogResponseType',
  description: 'response type for ProdCatalog',

  fields: () => ({
    catalogName: {type: GraphQLString},
    contentPathPrefix: {type: GraphQLString},
    headerLogo: {type: GraphQLString},
    prodCatalogId: {type: GraphQLString},
    purchaseAllowPermReqd: {type: GraphQLBoolean},
    styleSheet: {type: GraphQLString},
    templatePathPrefix: {type: GraphQLString},
    useQuickAdd: {type: GraphQLBoolean},
    viewAllowPermReqd: {type: GraphQLBoolean}
  })
});

export {ProdCatalogResponseType};
    