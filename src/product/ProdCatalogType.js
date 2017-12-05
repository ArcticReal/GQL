
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const ProdCatalog = new GraphQLObjectType({
  name: 'ProdCatalogType',
  description: 'Type for ProdCatalog in product',

  fields: () => ({
    catalogName: {type: GraphQLString},
    headerLogo: {type: GraphQLString},
    styleSheet: {type: GraphQLString},
    templatePathPrefix: {type: GraphQLString},
    useQuickAdd: {type: GraphQLBoolean},
    contentPathPrefix: {type: GraphQLString},
    viewAllowPermReqd: {type: GraphQLBoolean},
    prodCatalogId: {type: GraphQLString},
    purchaseAllowPermReqd: {type: GraphQLBoolean}
  })
});

export {ProdCatalog};
    