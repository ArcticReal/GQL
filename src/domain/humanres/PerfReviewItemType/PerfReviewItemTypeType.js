
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



const PerfReviewItemTypeType = new GraphQLObjectType({
  name: 'PerfReviewItemTypeType',
  description: 'Type for PerfReviewItemType in humanres',

  fields: () => ({
    perfReviewItemTypeId: {type: GraphQLString},
    parentType: {
      type: PerfReviewItemTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (perfReviewItemType, args, {loaders}) => loaders.ofbiz.load(`humanres/perfReview/perfReviewItemTypes/find?perfReviewItemTypeId=${perfReviewItemType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    perfReviewItemTypes: {
      type: new GraphQLList(PerfReviewItemTypeType),
      args : {},
      resolve: (perfReviewItemType, args, {loaders}) => loaders.ofbizArray.load(`humanres/perfReview/perfReviewItemTypes/find?perfReviewItemTypeId=${perfReviewItemType.perfReviewItemTypeId}`)
    }
  })
});

export {PerfReviewItemTypeType};
    