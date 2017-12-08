
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
      resolve: (perfReviewItemType, args, {loaders}) => loaders.ofbiz.load(`perfReviewItemTypes/find?perfReviewItemTypeId=${perfReviewItemType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    perfReviewItemTypes: {
      type: new GraphQLList(PerfReviewItemTypeType),
      args : {perfReviewItemTypeId: {type: GraphQLString}},
      resolve: (perfReviewItemType, args, {loaders}) => loaders.ofbizArray.load(`perfReviewItemTypes/find?perfReviewItemTypeId=${perfReviewItemType.perfReviewItemTypeId}`)
    }
  })
});

export {PerfReviewItemTypeType};
    




const PerfReviewItemTypeInputType = new GraphQLInputObjectType({
  name: 'PerfReviewItemTypeInputType',
  description: 'input type for PerfReviewItemType in humanres',

  fields: () => ({
    perfReviewItemTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {PerfReviewItemTypeInputType};
    