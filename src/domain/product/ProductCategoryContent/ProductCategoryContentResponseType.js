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

const ProductCategoryContentResponseType = new GraphQLObjectType({
  name: 'ProductCategoryContentResponseType',
  description: 'response type for ProductCategoryContent',

  fields: () => ({
    contentId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    prodCatContentTypeId: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    purchaseFromDate: {type: GraphQLString},
    purchaseThruDate: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    useCountLimit: {type: GraphQLInt},
    useDaysLimit: {type: GraphQLFloat}
  })
});

export {ProductCategoryContentResponseType};
    