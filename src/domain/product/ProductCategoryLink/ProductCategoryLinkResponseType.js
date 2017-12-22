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

const ProductCategoryLinkResponseType = new GraphQLObjectType({
  name: 'ProductCategoryLinkResponseType',
  description: 'response type for ProductCategoryLink',

  fields: () => ({
    comments: {type: GraphQLString},
    detailSubScreen: {type: GraphQLString},
    detailText: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    imageTwoUrl: {type: GraphQLString},
    imageUrl: {type: GraphQLString},
    linkInfo: {type: GraphQLString},
    linkSeqId: {type: GraphQLString},
    linkTypeEnumId: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString},
    titleText: {type: GraphQLString}
  })
});

export {ProductCategoryLinkResponseType};
    